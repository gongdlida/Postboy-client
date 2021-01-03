import * as React from "react";
import { Menu, Transition } from "@headlessui/react";
import ResponseStatus from "./ResponseStatus";

export default function OrangeMenu({
  children,
  username,
  history,
  setHistory,
}) {
  const handleClick = (e) => {
    setHistory([]);
  };
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="bg-orange-400 rounded focus:outline-none relative ml-2">
            <p className="px-2 py-1 text-sm font-medium text-white">
              {children}
            </p>
          </Menu.Button>
          <Transition show={open}>
            <Menu.Items
              static
              className="absolute right-8 mt-3 w-64 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none z-50"
            >
              <Menu.Item>
                {({ active }) => (
                  <button className="w-full px-2 py-2 text-sm flex justify-between center-align">
                    <p className="ml-2 break-words text-left">Hi {username}</p>
                    <a onClick={handleClick} className="">
                      Click to clear history.
                    </a>
                  </button>
                )}
              </Menu.Item>
              {history.map(({ url, methodType, status, statusText }) => (
                <Menu.Item>
                  {({ active }) => (
                    <button className="w-full px-2 py-2 text-sm space-y-2">
                      <p className="ml-2 break-words text-left">
                        <span>{methodType}</span>
                        <span className="ml-2">{url}</span>
                      </p>
                      <div className="ml-2">
                        <ResponseStatus
                          responseData={{
                            status: status,
                            statusText: statusText,
                          }}
                        ></ResponseStatus>
                      </div>
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
