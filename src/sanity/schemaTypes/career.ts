import { defineType } from 'sanity'

export const career = defineType({
  name: 'career',
  title: 'Career / Job Opening',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Job Type',
      type: 'string',
      options: {
        list: ['Full-time', 'Part-time', 'Internship', 'Contract'],
      },
    },
    {
      name: 'description',
      title: 'Job Description',
      type: 'blockContent',
    },
    {
      name: 'requirements',
      title: 'Requirements',
      type: 'blockContent',
    },
    {
      name: 'postedDate',
      title: 'Posted Date',
      type: 'date',
    },
    {
      name: 'isActive',
      title: 'Is Active?',
      type: 'boolean',
      initialValue: true,
    },
  ],
})
