import prismadb from "@/lib/prismadb";
import { format } from "date-fns";

import { SizeClient } from "./components/client";
import { SizeColumn } from "./components/columns";

const SizesPage = async ({
  params,
}: {
  params: {
    storeId: string;
  };
}) => {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedSizes: SizeColumn[] = sizes.map((sizes) => ({
    id: sizes.id,
    name: sizes.name,
    value: sizes.value,
    createdAt: format(sizes.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default SizesPage;
