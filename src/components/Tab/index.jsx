import { Tab } from "@headlessui/react";
import TableSabaq from "../../partials/TableSabaq";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  return (
    <div className="w-full px-2 pt-5 sm:px-0">
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
              "rounded bg-white shadow p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none"
            )}
          >
            <TableSabaq />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded bg-white shadow p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none"
            )}
          >
            <h5>Sabqi</h5>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded bg-white shadow p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none mb-20"
            )}
          >
            <h5>Manzil</h5>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}