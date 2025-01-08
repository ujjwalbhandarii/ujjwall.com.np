export const FORM_ERROR = {
  NAME: {
    REQUIRED: 'Please enter your name',
  },
  EMAIL: {
    REQUIRED: 'Please enter a email',
    INVALID: 'Invalid email format',
  },
  SUBJECT: {
    REQUIRED: 'Please enter a subject',
    MIN_LENGTH: 'Message must be at least 10 characters',
    MAX_LENGTH: 'Message must be at most 50 characters',
  },
  MESSAGE: {
    REQUIRED: 'Please enter a message',
    MIN_LENGTH: 'Message must be at least 20 characters',
    MAX_LENGTH: 'Message must be at most 500 characters',
  },
} as const;
