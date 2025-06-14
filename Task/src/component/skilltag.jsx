const SidebarCard = ({ name, location, experience, education, skills, applied }) => {
  return (
    <div className="bg-blue-100 p-4 rounded-md mb-4 shadow-sm">
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="text-sm mt-1">{experience}</p>
      <p className="text-sm mt-1">{education}</p>
      <div className="flex flex-wrap mt-1 gap-1">
        {skills.map((skill, index) => (
          <span key={index} className="text-green-700 text-xs bg-green-100 px-2 py-0.5 rounded-full">
            {skill}
          </span>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-2">{applied}</p>
    </div>
  );
};

export default SidebarCard;
