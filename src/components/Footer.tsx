import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6 px-6 mt-auto">
      <div className="container mx-auto">
        <div className="flex justify-center gap-8 text-xs mb-4">
          <Link to="#" className="hover:opacity-80">Customer Service<br/>800-535-2873</Link>
          <Link to="#" className="hover:opacity-80">Roadside Assistance<br/>866-522-1991</Link>
          <Link to="#" className="hover:opacity-80">Report Claim<br/>800-229-9151</Link>
          <span>214 Carnegie Center, Suite 501<br/>Princeton, NJ 08540</span>
        </div>
        <div className="text-center text-xs opacity-90">
          Copyright© 2025 CURE (Citizens United Reciprocal Exchange). All rights reserved.
        </div>
      </div>
    </footer>
  );
};
