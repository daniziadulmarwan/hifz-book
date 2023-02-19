import { Tab } from "@headlessui/react";
import TableManzil from "../../partials/TableManzil";
import TableSabaq from "../../partials/TableSabaq";
import TableSabqi from "../../partials/TableSabqi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({ santri_id }) {
  return (
    <div className="w-full px-2 pt-5 sm:px-0 roboto-font">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-white shadow p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-48 md:w-1/6 rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white uppercase ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2",
                selected
                  ? "bg-sky-400 text-white shadow"
                  : "text-slate-700 hover:bg-white/[0.12]"
              )
            }
          >
            Setoran Sabaq
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-48 md:w-1/6 rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white uppercase ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2",
                selected
                  ? "bg-sky-400 text-white shadow"
                  : "text-slate-700 hover:bg-white/[0.12]"
              )
            }
          >
            Setoran Sabqi
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-48 md:w-1/6 rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white uppercase ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2",
                selected
                  ? "bg-sky-400 text-white shadow"
                  : "text-slate-700 hover:bg-white/[0.12]"
              )
            }
          >
            Setoran Manzil
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              "rounded bg-white shadow p-3 mb-32",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none"
            )}
          >
            {/* START: Table Sabaq */}
            <TableSabaq santri_id={santri_id} />
            {/* END: Table Sabaq */}
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded bg-white shadow p-3 mb-32",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none"
            )}
          >
            {/* START: Table Sabqi */}
            <TableSabqi santri_id={santri_id} />
            {/* END: Table Sabqi */}
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded bg-white shadow p-3 mb-32",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none mb-20"
            )}
          >
            {/* START: Table Sabaq */}
            <TableManzil santri_id={santri_id} />
            {/* END: Table Sabaq */}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
