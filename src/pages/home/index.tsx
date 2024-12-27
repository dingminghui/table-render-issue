import TableRender from "table-render";

const searchApi = async (params) => {
  console.log('----', params);
  return {
    data: [],
    total: 0,
  };
};

export default function Home() {
  return (
    <TableRender
      search={{ schema: {} }}
      request={searchApi}
      columns={[]}
      pagination={{ pageSize: 2 }}
    />
  );
}
