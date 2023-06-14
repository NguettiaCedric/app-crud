import Head from "next/head";
// import { BiUserPlus } from "react-icons";
import { BiUserPlus } from "react-icons/bi";
import Table from "../components/table";
import Form from "../components/form";
export default function Home() {
  return (
    <section>
      <Head>
        <title>Crud Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-blod py-10">
          Employee Management
        </h1>

        <div className="container mx-auto flex justitfy-between py-5 border-b">
          <div className="left flex gap-3">
            <button className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bd-gray-50 hover:border-indigo-5OO hover:text-gray-800">
              Add Employee{" "}
              <span className="px-2">
                <BiUserPlus size={23}></BiUserPlus>
              </span>
            </button>
          </div>
        </div>

        {/* collapsable form */}
        <div className="container mx-auto py-5">
          <Form></Form>
        </div>
        {/* End collapsable form */}

        {/* table */}
        <div className="container mx-auto">
          <Table></Table>
        </div>
        {/* End table */}
      </main>
    </section>
  );
}
