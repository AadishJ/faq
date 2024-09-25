"use client"
import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Ayush-veda?',
      answer: 'Ayush-veda is a startup registration portal exclusively designed for Ayurvedic startups. It simplifies the registration process for Ayurvedic ventures, enabling efficient collaboration among startups, investors, and stakeholders.',
    },
    {
      question: 'Who can use the Ayush-veda platform?',
      answer: 'The platform is accessible to startups, investors, and government officials, each with tailored views based on their roles.',
    },
    {
      question: 'How does the Application Submission process work?',
      answer: 'The platform streamlines the Application Submission process with step-by-step forms and GST-based verification to ensure the authenticity of Ayurvedic businesses.',
    },
    {
      question: 'What document management features does Ayush-veda offer?',
      answer: 'Users can easily upload required documents for their applications. We plan to integrate DigiLocker for seamless document validation in the future, ensuring compliance with regulatory requirements.',
    },
    {
      question: 'How does real-time Status Tracking work?',
      answer: 'Real-time Status Tracking keeps all users updated on the progress of their applications, with notifications sent via email and SMS.',
    },
    {
      question: 'Are there multi-language options available?',
      answer: 'Yes, the platform supports multi-language options, enabling Ayurvedic startups to register from anywhere in the world.',
    },
    {
      question: 'What is the Premium Feature offered by Ayush-veda?',
      answer: 'The Premium Feature connects startups with experienced mentors in the Ayurvedic sector, providing valuable insights and advice.',
    },
    {
      question: 'How does Ayush-veda ensure security?',
      answer: 'User Authentication leverages JWT tokens for secure session management, while bcrypt is used for password hashing. Our data management is GDPR-compliant, utilizing encryption, privacy compliance, and regular backups to protect user information.',
    },
    {
      question: 'What is the architecture of the Ayush-veda platform?',
      answer: 'The system is built on a Scalable Cloud Architecture that dynamically adjusts based on the platform\'s load, ensuring optimal performance during peak times.',
    },
    {
      question: 'What support options are available?',
      answer: 'We provide an extensive FAQ/Help Section, and our interactive Chatbot is available for instant support and answers.',
    },
    {
      question: 'How can I start the application process?',
      answer: 'Startups can fill out the registration form, complete GST verification, and upload required documents. The status of each application is updated in real-time.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-5">
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Frequently Asked Questions (FAQs)</h2>
      <div className="border border-green-300 rounded-lg shadow-md">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-green-200">
            <div 
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-green-100" 
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="font-medium text-green-800">{faq.question}</h3>
              <span className="text-lg text-green-600">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="p-4 bg-green-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
