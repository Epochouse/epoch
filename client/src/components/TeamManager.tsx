import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

const TeamManager = ({
  teamMembers,
  newMemberName,
  newMemberPosition,
  newMemberEmail,
  selectedTeamMember,
  setNewMemberName,
  setNewMemberPosition,
  setNewMemberEmail,
  handleAddTeamMember,
  handleEditTeamMember,
  handleDeleteTeamMember,
  handleUpdateTeamMember,
}) => {
  return (
    <div className="glass-panel dark:glass-panel-dark rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Team Members</h2>
        <Button
          onClick={handleAddTeamMember}
          variant="default"
          className="bg-studio-gold hover:bg-studio-gold-dark"
        >
          Add New Member
        </Button>
      </div>

      <div className="mb-6 space-y-4">
        {selectedTeamMember && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                value={newMemberName}
                onChange={(e) => setNewMemberName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium mb-1">Position</label>
              <input
                type="text"
                className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                value={newMemberPosition}
                onChange={(e) => setNewMemberPosition(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                value={newMemberEmail}
                onChange={(e) => setNewMemberEmail(e.target.value)}
              />
            </div>
            <Button
              onClick={handleUpdateTeamMember}
              variant="default"
              className="col-span-1 md:col-span-3 bg-studio-gold hover:bg-studio-gold-dark"
            >
              Update Member
            </Button>
          </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="py-3 text-left">Name</th>
              <th className="py-3 text-left">Position</th>
              <th className="py-3 text-left">Email</th>
              <th className="py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member) => (
              <tr
                key={member.id}
                className="border-b border-gray-200 dark:border-gray-800"
              >
                <td className="py-3">{member.name}</td>
                <td className="py-3">{member.position}</td>
                <td className="py-3">{member.email}</td>
                <td className="py-3">
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => handleEditTeamMember(member.id)}
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <Pencil className="h-4 w-4" />
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDeleteTeamMember(member.id)}
                      size="sm"
                      variant="destructive"
                      className="flex items-center gap-1"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamManager;
