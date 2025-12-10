import { Package, ShoppingCart, DollarSign, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAllProducts } from "@/hooks/useProducts";
import { useOrders } from "@/hooks/useOrders";

const AdminDashboard = () => {
  const { data: products } = useAllProducts();
  const { data: orders } = useOrders("all");
  const { data: todayOrders } = useOrders("today");

  const totalRevenue = orders?.reduce((sum, order) => sum + Number(order.total_amount), 0) || 0;
  const todayRevenue = todayOrders?.reduce((sum, order) => sum + Number(order.total_amount), 0) || 0;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  const stats = [
    {
      title: "Total Products",
      value: products?.length || 0,
      icon: Package,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Total Orders",
      value: orders?.length || 0,
      icon: ShoppingCart,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Today's Orders",
      value: todayOrders?.length || 0,
      icon: TrendingUp,
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
    {
      title: "Total Revenue",
      value: formatPrice(totalRevenue),
      icon: DollarSign,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to Aarogyam Agencies Admin Panel</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`rounded-lg p-2 ${stat.bg}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Active Products</span>
              <span className="font-semibold">
                {products?.filter((p) => p.is_active).length || 0}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Pending Orders</span>
              <span className="font-semibold">
                {orders?.filter((o) => o.status === "pending").length || 0}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Today's Revenue</span>
              <span className="font-semibold text-primary">{formatPrice(todayRevenue)}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            {orders?.slice(0, 5).map((order) => (
              <div key={order.id} className="flex items-center justify-between border-b border-border py-2 last:border-0">
                <div>
                  <p className="text-sm font-medium">{order.customer_name}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(order.created_at!).toLocaleDateString()}
                  </p>
                </div>
                <span className="text-sm font-semibold text-primary">
                  {formatPrice(Number(order.total_amount))}
                </span>
              </div>
            ))}
            {(!orders || orders.length === 0) && (
              <p className="text-center text-muted-foreground">No recent orders</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;