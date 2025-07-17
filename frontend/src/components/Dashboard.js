import { useEffect, useState } from 'react';
import { fetchLogs } from '../services/api';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState('timestamp');
  const [sortOrder, setSortOrder] = useState('desc');
  const [filters, setFilters] = useState({ country: '', client: '' });

  useEffect(() => {
    loadLogs();
  }, [page, sortBy, sortOrder, filters]);

  const loadLogs = async () => {
    setLoading(true);
    try {
      const data = await fetchLogs({ page, sortBy, sortOrder, filters });
      setLogs(data.logs || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      console.error('Failed to load logs:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
    setPage(1);
  };

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
    setPage(1);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Operations Dashboard</h1>
      <Link to="/assistant" className="text-blue-600 underline">Go to Assistant</Link>
      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Filter by Country"
          value={filters.country}
          onChange={(e) => handleFilterChange('country', e.target.value)}
          className="border px-2 py-1"
        />
        <input
          type="text"
          placeholder="Filter by Client"
          value={filters.client}
          onChange={(e) => handleFilterChange('client', e.target.value)}
          className="border px-2 py-1"
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table className="border border-collapse w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th
                  className="border px-3 py-2 text-left cursor-pointer"
                  onClick={() => toggleSort('transactionSourceName')}
                >
                  Client {sortBy === 'transactionSourceName' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th
                  className="border px-3 py-2 text-left cursor-pointer"
                  onClick={() => toggleSort('country_code')}
                >
                  Country {sortBy === 'country_code' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th className="border px-3 py-2 text-right">Total Records</th>
                <th className="border px-3 py-2 text-right">Indexed</th>
                <th className="border px-3 py-2 text-right">Failed</th>
                <th
                  className="border px-3 py-2 text-left cursor-pointer"
                  onClick={() => toggleSort('timestamp')}
                >
                  Timestamp {sortBy === 'timestamp' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log._id}>
                  <td className="border px-3 py-2">{log.transactionSourceName}</td>
                  <td className="border px-3 py-2">{log.country_code}</td>
                  <td className="border px-3 py-2 text-right">
                    {log.progress?.TOTAL_RECORDS_IN_FEED?.toLocaleString()}
                  </td>
                  <td className="border px-3 py-2 text-right">
                    {log.progress?.TOTAL_JOBS_SENT_TO_INDEX?.toLocaleString()}
                  </td>
                  <td className="border px-3 py-2 text-right">
                    {log.progress?.TOTAL_JOBS_FAIL_INDEXED?.toLocaleString()}
                  </td>
                  <td className="border px-3 py-2">
                    {new Date(log.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-4 gap-4">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Previous
            </button>
            <span className="text-sm text-gray-700">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;