import React, { useState } from "react";

const Setting = () => {
  const [language, setLanguage] = useState("BM");
  const [dataBackup, setDataBackup] = useState(true);
  const [goDash, setGoDash] = useState(true);
  const [superController, setSuperController] = useState(true);
  const [enableSMTP, setEnableSMTP] = useState(true);
  const [editAuthorization, setEditAuthorization] = useState(true);
  const [authorityLevel, setAuthorityLevel] = useState(1); // Example level
  const [enableNotification, setEnableNotification] = useState(true);
  const [isGeneralOpen, setIsGeneralOpen] = useState(true);
  const [isConnectToOpen, setIsConnectToOpen] = useState(true);
  const [isEmailOpen, setIsEmailOpen] = useState(true);
  const [isAuthorizationOpen, setIsAuthorizationOpen] = useState(true);
  const [isNotificationOpen, setIsNotificationOpen] = useState(true);

  return (
    <div className="w-[1050px] p-5 bg-gray-100 rounded-lg shadow-md ml-20">
      {/* General Section */}
      <div className="mb-5 bg-teal-400 p-3 rounded-md">
        <div
          className="font-semibold text-white cursor-pointer"
          onClick={() => setIsGeneralOpen(!isGeneralOpen)}
        >
          General
        </div>
        {isGeneralOpen && (
          <div className="bg-white p-3 mt-2 rounded-md">
            <div className="flex justify-between items-center mb-3">
              <div className="flex-1">Language</div>
              <div className="flex gap-2">
                <div className="bg-gray-300 p-1 rounded-md">1066 x 58</div>
                <button
                  className={`${
                    language === "BM" ? "bg-blue-500" : "bg-green-500"
                  } text-white py-1 px-2 rounded-md`}
                  onClick={() => setLanguage("BM")}
                >
                  BM
                </button>
                <button
                  className={`${
                    language === "BI" ? "bg-blue-500" : "bg-green-500"
                  } text-white py-1 px-2 rounded-md`}
                  onClick={() => setLanguage("BI")}
                >
                  BI
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center mb-3">
              <div className="flex-1">Data Backup</div>
              <input
                type="checkbox"
                checked={dataBackup}
                onChange={(e) => setDataBackup(e.target.checked)}
                className="h-5 w-5"
              />
            </div>
          </div>
        )}
      </div>

      {/* Connect To Section */}
      <div className="mb-5 bg-teal-400 p-3 rounded-md">
        <div
          className="font-semibold text-white cursor-pointer"
          onClick={() => setIsConnectToOpen(!isConnectToOpen)}
        >
          Connect To
        </div>
        {isConnectToOpen && (
          <div className="bg-white p-3 mt-2 rounded-md">
            <div className="flex justify-between items-center mb-3">
              <div className="flex-1">GoDash</div>
              <input
                type="checkbox"
                checked={goDash}
                onChange={(e) => setGoDash(e.target.checked)}
                className="h-5 w-5"
              />
            </div>
            <div className="flex justify-between items-center mb-3">
              <div className="flex-1">SuperController</div>
              <input
                type="checkbox"
                checked={superController}
                onChange={(e) => setSuperController(e.target.checked)}
                className="h-5 w-5"
              />
            </div>
          </div>
        )}
      </div>

      {/* Email Section */}
      <div className="mb-5 bg-teal-400 p-3 rounded-md">
        <div
          className="font-semibold text-white cursor-pointer"
          onClick={() => setIsEmailOpen(!isEmailOpen)}
        >
          Email
        </div>
        {isEmailOpen && (
          <div className="bg-white p-3 mt-2 rounded-md">
            <div className="flex justify-between items-center mb-3">
              <div className="flex-1">Enable SMTP</div>
              <input
                type="checkbox"
                checked={enableSMTP}
                onChange={(e) => setEnableSMTP(e.target.checked)}
                className="h-5 w-5"
              />
            </div>
          </div>
        )}
      </div>

      {/* Authorization Section */}
      <div className="mb-5 bg-teal-400 p-3 rounded-md">
        <div
          className="font-semibold text-white cursor-pointer"
          onClick={() => setIsAuthorizationOpen(!isAuthorizationOpen)}
        >
          Authorization
        </div>
        {isAuthorizationOpen && (
          <div className="bg-white p-3 mt-2 rounded-md">
            <div className="flex justify-between items-center mb-3">
              <div className="flex-1">Edit authorization</div>
              <input
                type="checkbox"
                checked={editAuthorization}
                onChange={(e) => setEditAuthorization(e.target.checked)}
                className="h-5 w-5"
              />
            </div>
            <div className="flex justify-between items-center mb-3">
              <div className="flex-1">Authority Level</div>
              <select
                value={authorityLevel}
                onChange={(e) =>
                  setAuthorityLevel(parseInt(e.target.value, 10))
                }
                className="p-2 rounded-md border border-gray-300"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Notification Section */}
      <div className="mb-5 bg-teal-400 p-3 rounded-md">
        <div
          className="font-semibold text-white cursor-pointer"
          onClick={() => setIsNotificationOpen(!isNotificationOpen)}
        >
          Notification
        </div>
        {isNotificationOpen && (
          <div className="bg-white p-3 mt-2 rounded-md">
            <div className="flex justify-between items-center mb-3">
              <div className="flex-1">Enable Notification</div>
              <input
                type="checkbox"
                checked={enableNotification}
                onChange={(e) => setEnableNotification(e.target.checked)}
                className="h-5 w-5"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setting;
