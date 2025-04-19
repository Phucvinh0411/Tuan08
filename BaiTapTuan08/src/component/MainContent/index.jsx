import { Card, CardContent } from "../Card/Card";
const MainContent = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 mb-6  p-4 border-b-1 border-r-1 border-gray-200 ">
        <Card className="bg-pink-50 shadow-md">
          <CardContent className="p-4">
            <div className="text-gray-500">Turnover</div>
            <div className="text-xl font-bold">$92,405</div>
            <div className="text-green-500 text-sm">+3.5% period change</div>
          </CardContent>
        </Card>
        <Card className="bg-blue-100 shadow-md">
          <CardContent className="p-4">
            <div className="text-gray-500">Profit</div>
            <div className="text-xl font-bold">$32,218</div>
            <div className="text-green-500 text-sm">+5.3% period change</div>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 shadow-md">
          <CardContent className="p-4">
            <div className="text-gray-500">New customer</div>
            <div className="text-xl font-bold">298</div>
            <div className="text-green-500 text-sm">+6.8% period change</div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export default MainContent;
