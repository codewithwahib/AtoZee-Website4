"use client"
import React, { useState } from 'react';
import { client } from '@/sanity/lib/client';
import { FaChevronDown, FaChevronUp, FaArrowRight } from 'react-icons/fa';
import { PortableText } from '@portabletext/react';
import Navbar from '../../Components/navbar';
import Footer from '../../Components/footer';
import ContactBar from '../../Components/topbar';
import { DM_Sans } from 'next/font/google';
import Link from 'next/link';

const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: '700',
});

interface JobOpening {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experienceLevel: string;
  description: any;
  requirements: any[];
  postedDate: string;
  applicationDeadline?: string;
}

async function getJobOpenings(): Promise<JobOpening[]> {
  const query = `*[_type == "career"] {
    _id,
    title,
    department,
    location,
    type,
    experienceLevel,
    description,
    requirements,
    postedDate,
    applicationDeadline
  } | order(postedDate desc)`;
  return await client.fetch(query);
}

export default function CurrentOpenings() {
  const [jobs, setJobs] = React.useState<JobOpening[]>([]);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    getJobOpenings()
      .then(data => {
        setJobs(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
        setIsLoading(false);
      });
  }, []);

  const toggleJobDetails = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const portableTextComponents = {
    marks: {
      link: ({ value, children }: any) => {
        return (
          <a href={value?.href} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      },
    },
    block: {
      normal: ({ children }: any) => <p className="mb-4">{children}</p>,
    },
  };

  return (
    <>
      <ContactBar />
      <Navbar />
      
      <main className="min-h-screen">
        <div className="w-full py-12">
          {isLoading ? (
            <div className="text-center py-8">Loading job openings...</div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Currently no job openings available. Please check back later.
            </div>
          ) : (
            <div className="space-y-4 mx-auto" style={{ width: '90%' }}>
              {jobs.map((job) => (
                <div key={job._id} className="border border-gray-200 overflow-hidden w-full">
                  {/* Job Title Only - Collapsed State */}
                  <div 
                    className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleJobDetails(job._id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && toggleJobDetails(job._id)}
                  >
                    <h2 className={`text-3xl tracking-wider font-bold text-gray-900 ${dmsans.className}`}>
                      {job.title}
                    </h2>
                    {expandedJobId === job._id ? (
                      <FaChevronUp className="text-gray-500" />
                    ) : (
                      <FaChevronDown className="text-gray-500" />
                    )}
                  </div>

                  {/* All Other Details - Expanded State */}
                  {expandedJobId === job._id && (
                    <div className="p-6 pt-6 border-t border-gray-100 space-y-6">
                      {/* Basic Info */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className={`text-3xl tracking-wider font-bold text-[#8B5E3C] ${dmsans.className}`}>Department:</h3>
                          <p className={`text-base text-xl pt-5 font-medium tracking-wider ${dmsans.className}`}>{job.department}</p>
                        </div>
                        <div>
                          <h3 className={`text-3xl tracking-wider font-bold text-[#8B5E3C] ${dmsans.className}`}>Location:</h3>
                          <p className={`text-base text-xl pt-5 font-medium tracking-wider ${dmsans.className}`}>{job.location}</p>
                        </div>
                        <div>
                          <h3 className={`text-3xl tracking-wider font-bold text-[#8B5E3C] ${dmsans.className}`}>Job Type:</h3>
                          <p className={`text-base text-xl pt-5 font-medium tracking-wider ${dmsans.className}`}>{job.type}</p>
                        </div>
                        <div>
                          <h3 className={`text-3xl tracking-wider font-bold text-[#8B5E3C] ${dmsans.className}`}>Experience Level:</h3>
                          <p className={`text-xl font-medium pt-5 tracking-wider ${dmsans.className}`}>{job.experienceLevel}</p>
                        </div>
                      </div>

                      {/* Job Description */}
                      <div>
                        <h3 className={`text-3xl tracking-wider font-bold text-[#8B5E3C] ${dmsans.className}`}>Job Description:</h3>
                        <div className={`text-base text-xl pt-5 font-medium tracking-wider ${dmsans.className}`}>
                          <PortableText
                            value={job.description}
                            components={portableTextComponents}
                          />
                        </div>
                      </div>
                      
                      {/* Requirements */}
                      <div>
                        <h3 className={`text-3xl tracking-wider font-bold text-[#8B5E3C] ${dmsans.className}`}>Requirements:</h3>
                        <ul className={`text-base text-xl pt-5 font-medium tracking-wider ${dmsans.className}`}>
                          {job.requirements?.map((req, i) => (
                            <li key={i}>
                              <PortableText value={req} components={portableTextComponents} />
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Dates and Apply Button */}
                      <div className="flex justify-between items-center">
                        <div className={`text-base text-xl font-medium tracking-wider ${dmsans.className}`}>
                          <div>
                            Posted: {new Date(job.postedDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                          {job.applicationDeadline && (
                            <div>
                              Apply by: {new Date(job.applicationDeadline).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </div>
                          )}
                        </div>
                        <Link
                          href={`/careers/apply-now?job=${encodeURIComponent(job.title)}`}
                          className={`group px-8 py-3 border-2 border-[#8B5E3C] text-[#8B5E3C] hover:text-white text-2xl font-bold tracking-wider rounded-lg hover:bg-[#8B5E3C] transition-colors ${dmsans.className} flex items-center gap-2`}
                        >
                          APPLY NOW
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}