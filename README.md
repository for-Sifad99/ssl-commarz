# SSLCommerz Payment Frontend

A modern Next.js frontend application for handling SSLCommerz payment integration. This application provides a clean UI for users to browse services and initiate payments securely.

## Features

- Service listing with pricing
- Secure payment initiation
- Responsive design with Tailwind CSS
- Integration with SSLCommerz payment gateway
- Email collection for payment confirmations

## Tech Stack

- **Framework**: Next.js 15
- **Language**: JavaScript (React 19)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **HTTP Client**: Axios

## Project Structure

```
sslcommarz/
├── src/
│   ├── app/
│   │   ├── payment/       # Payment page
│   │   ├── layout.js      # Root layout
│   │   └── page.js        # Home page
│   └── components/
│       └── products.jsx   # Service listing component
├── public/                # Static assets
└── ...
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd sslcommarz
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Deployment

The frontend is configured for deployment on Vercel. Follow the standard Vercel deployment process.

## Pages

### Home Page (`/`)

Displays a list of available services with pricing. Each service has a "Buy Now" button that redirects to the payment page with service details.

### Payment Page (`/payment`)

Handles the payment process:
1. Displays selected service details
2. Collects user email
3. Initiates payment via the backend API
4. Redirects to SSLCommerz payment gateway

## Components

### Products Component

Renders the service listing with:
- Service name and description
- Pricing information
- Buy Now buttons that pass service data to the payment page

## API Integration

The frontend communicates with the backend API at `http://localhost:5000` for payment initiation.

## Environment Variables

The frontend doesn't require any environment variables for basic functionality.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License.