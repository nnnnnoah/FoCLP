# Friends of Charleston Lake Park Website

2025 React rewrite for the Friends of Charleston Lake Park.

## Stack

- React
- React Router
- Tailwind CSS
- Lucide React (icons)
- FormSubmit (form handling)

## Setup

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run deploy
```

## Forms

Forms submit via FormSubmit.co:

- Contact/Volunteer: info@friendsofcharlestonlakepark.ca
- Membership: foclptreasurer@1000island.net

To update an address, edit the `action` attribute in the form components and changed the queried endpoint. New email addresses require a test submission for validation.

## Project Structure

```
src/
├── components/     # Reusable components (Navbar, Footer, etc.)
├── pages/          # Page components
├── App.jsx         # Root
└── index.css       # Styling overrides
```

## Development Resources

- Commit Standards: https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13
- GTM Integration

## Credits

- Development: Noah Miller (noahmiller@hotmail.ca)
- Organization: Friends of Charleston Lake Park
