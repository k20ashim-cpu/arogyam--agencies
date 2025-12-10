import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type Order = Tables<"orders">;
export type OrderItem = Tables<"order_items">;

export interface OrderWithItems extends Order {
  order_items: OrderItem[];
}

type DateFilter = "all" | "today" | "week" | "month";

export const useOrders = (dateFilter: DateFilter = "all") => {
  return useQuery({
    queryKey: ["orders", dateFilter],
    queryFn: async () => {
      let query = supabase
        .from("orders")
        .select(`
          *,
          order_items (*)
        `)
        .order("created_at", { ascending: false });

      const now = new Date();
      
      if (dateFilter === "today") {
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
        query = query.gte("created_at", startOfDay);
      } else if (dateFilter === "week") {
        const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay())).toISOString();
        query = query.gte("created_at", startOfWeek);
      } else if (dateFilter === "month") {
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
        query = query.gte("created_at", startOfMonth);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data as OrderWithItems[];
    },
  });
};