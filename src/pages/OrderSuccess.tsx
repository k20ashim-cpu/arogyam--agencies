import { Link, useLocation } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const OrderSuccess = () => {
  const location = useLocation();
  const orderId = location.state?.orderId;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center py-12">
        <div className="container max-w-md text-center">
          <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary/20">
            <CheckCircle className="h-12 w-12 text-primary" />
          </div>

          <h1 className="font-display text-3xl font-bold">
            Order <span className="text-gradient-nature">Confirmed!</span>
          </h1>

          <p className="mt-4 text-muted-foreground">
            Thank you for choosing Aarogyam Agencies! Your order has been placed and 
            the details have been sent to our team.
          </p>

          {orderId && (
            <p className="mt-2 text-sm text-muted-foreground">
              Order ID: <span className="font-mono font-medium">{orderId.slice(0, 8)}</span>
            </p>
          )}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/menu">
              <Button variant="outline">Continue Shopping</Button>
            </Link>
            <Link to="/">
              <Button className="gap-2 bg-gradient-nature shadow-nature">
                Back to Home
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccess;