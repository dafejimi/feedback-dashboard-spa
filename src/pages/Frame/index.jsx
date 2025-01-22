import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { createColumnHelper } from "@tanstack/react-table";
import { Heading, Text, Input, Button, ReactTable, Navbar, Footer } from "../../components";

const FeedbackDashboard = () => {
  const [formData, setFormData] = useState({ name: '', comment: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackHistory, setFeedbackHistory] = useState(() => {
    const saved = localStorage.getItem('feedbackHistory');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('feedbackHistory', JSON.stringify(feedbackHistory));
  }, [feedbackHistory]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const newFeedback = {
        rowinput: '',
        rowtitle: formData.comment,
        rowstate: 'New',
        rowsender: formData.name,
        rowcontenttype: 'Feedback',
        rowsent: new Date().toLocaleTimeString(),
        rowresponse: `Thank you for your comment, ${formData.name}!`,
        rowThree: new Date().toLocaleDateString(),
      };

      setFeedbackHistory((prev) => [newFeedback, ...prev]);
      setIsLoading(false);
      setFormData({ name: '', comment: '' });
    }, 2000);
  };

  const tableColumnHelper = createColumnHelper();
  const tableColumns = React.useMemo(() => [
    tableColumnHelper.accessor('rowsender', {
      cell: (info) => (
        <div className="flex items-center gap-2">
          <span className="h-[24px] w-[24px] rounded-full bg-blue-100 flex items-center justify-center">
            {info.getValue().charAt(0).toUpperCase()}
          </span>
          <Text className="text-[14px] font-normal">{info.getValue()}</Text>
        </div>
      ),
      header: 'Name',
      meta: { width: '200px' },
    }),
    tableColumnHelper.accessor('rowtitle', {
      cell: (info) => <Text className="text-[14px]">{info.getValue()}</Text>,
      header: 'Comment',
      meta: { width: '300px' },
    }),
    tableColumnHelper.accessor('rowresponse', {
      cell: (info) => <Text className="text-[14px] text-green-600">{info.getValue()}</Text>,
      header: 'Response',
      meta: { width: '250px' },
    }),
    tableColumnHelper.accessor('rowsent', {
      cell: (info) => <Text className="text-[14px] text-gray-500">{info.getValue()}</Text>,
      header: 'Time',
      meta: { width: '150px' },
    }),
  ], []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Helmet>
        <title>Feedback Dashboard</title>
        <meta name="description" content="Submit and view feedback responses" />
      </Helmet>

      <Navbar />

      <div className="mx-auto max-w-4xl">
        <div className="mb-8 mt-8">
          <Heading level={1} className="text-2xl font-semibold text-gray-900">
            Feedback Dashboard
          </Heading>
          <Text className="mt-2 text-gray-600">
            Share your thoughts and view responses
          </Text>
        </div>

        <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Text as="label" htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </Text>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Text as="label" htmlFor="comment" className="block text-sm font-medium text-gray-700">
                Comment
              </Text>
              <Input
                as="textarea"
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                required
                rows={4}
              />
            </div>
            <Button type="submit" isLoading={isLoading}>
              Submit Feedback
            </Button>
          </form>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <Heading level={2} className="mb-4 text-lg font-medium">
            Feedback History
          </Heading>
          {isLoading && (
            <Text className="mb-4 text-center text-gray-600">
              Your feedback is being processed...
            </Text>
          )}
          <div className="overflow-x-auto">
            <ReactTable
              columns={tableColumns}
              data={feedbackHistory}
              headerProps={{ className: 'bg-gray-50' }}
              className="w-full border-collapse"
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default FeedbackDashboard;
