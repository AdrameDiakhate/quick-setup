import * as React from 'react';

interface EmailTemplateProps {
  username: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
}) => (
  <div>
    <h1 className='text-lg text-primary'>Bonjour, {username}!</h1>
  </div>
);
