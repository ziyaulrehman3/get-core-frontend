import React, { useState } from "react";
// import PersonalDetail from './PersonalDetail';

const ViewCustomer = () => {
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Mock customer data for demonstration
  const mockCustomer = {
    id: "C5002",
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    phone: "555-123-4567",
    address: "123 Main Street",
    city: "Springfield",
    state: "IL",
    zip: "62704",
    dob: "1985-07-15",
    createdAt: "2025-01-10",
    loans: [
      {
        id: "L1001",
        amount: 10000,
        remainingAmount: 8500,
        status: "Active",
        startDate: "2025-04-10",
      },
      {
        id: "L950",
        amount: 5000,
        remainingAmount: 0,
        status: "Closed",
        startDate: "2024-05-22",
      },
    ],
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API call with setTimeout
    setTimeout(() => {
      if (searchId.trim() === "C5002") {
        setSearchResult(mockCustomer);
      } else {
        setError("Customer not found. Please check the ID and try again.");
        setSearchResult(null);
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="p-6 overflow-auto">
      <h1 className="text-2xl font-bold mb-6">View Customer Profile</h1>

      <div className="mb-6 bg-white shadow-md rounded-lg p-4">
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="Enter Customer ID"
            className="flex-grow shadow appearance-none border rounded py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={isLoading}
          >
            {isLoading ? "Searching..." : "Search"}
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <p className="text-sm text-gray-600 mt-2">
          Try using customer ID: C5002 for demo
        </p>
      </div>

      {searchResult && (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">
                  {searchResult.firstName} {searchResult.lastName}
                </h2>
                <p className="text-sm text-gray-600">
                  Customer ID: {searchResult.id}
                </p>
                <p className="text-sm text-gray-600">
                  Customer since: {searchResult.createdAt}
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Edit Profile
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  New Loan
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Email</h4>
                  <p>{searchResult.email}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                  <p>{searchResult.phone}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Address</h4>
                  <p>{searchResult.address}</p>
                  <p>
                    {searchResult.city}, {searchResult.state} {searchResult.zip}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Date of Birth
                  </h4>
                  <p>{searchResult.dob}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Loans</h3>
              {searchResult.loans.length > 0 ? (
                <div className="space-y-4">
                  {searchResult.loans.map((loan) => (
                    <div
                      key={loan.id}
                      className={`p-4 border rounded-lg ${
                        loan.status === "Active"
                          ? "border-blue-200 bg-blue-50"
                          : "border-gray-200 bg-gray-50"
                      }`}
                    >
                      <div className="flex justify-between">
                        <h4 className="font-medium">Loan #{loan.id}</h4>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            loan.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {loan.status}
                        </span>
                      </div>
                      <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-gray-500">Amount</p>
                          <p className="font-medium">
                            ${loan.amount.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">Remaining</p>
                          <p className="font-medium">
                            ${loan.remainingAmount.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">Start Date</p>
                          <p className="font-medium">{loan.startDate}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-end">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View Details →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">
                  No loans found for this customer.
                </p>
              )}
            </div>
          </div>

          <div className="p-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Payment History</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Loan ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Method
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2025-06-10
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      L1001
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      $300.41
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Credit Card
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2025-05-10
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      L1001
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      $300.41
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Credit Card
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewCustomer;
