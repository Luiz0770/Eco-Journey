export default function CardMission() {
  return (
    <div className="w-fullborder rounded-lg shadow-lg">
      <div className="flex flex-col items-center py-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="/docs/images/people/profile-picture-3.jpg"
        />
        <h5 className="text-xl font-medium text-gray-900">Bonnie Green</h5>
        <span className="text-sm text-gray-500">Visual Designer</span>
        <div className="flex mt-4">
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            Add friend
          </a>
          <a
            href="#"
            className="py-2 px-4 ml-2 text-sm font-medium text-gray-900 bg-white rounded-lg border hover:bg-gray-100 hover:text-blue-700"
          >
            Message
          </a>
        </div>
      </div>
    </div>
  );
}
