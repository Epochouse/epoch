import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

const ServiceManager = ({
  services,
  newServiceName,
  selectedService,
  setNewServiceName,
  handleAddService,
  handleEditService,
  handleDeleteService,
  handleUpdateService,
}) => {
  return (
    <div className="glass-panel dark:glass-panel-dark rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Manage Services</h2>
        <Button
          onClick={handleAddService}
          variant="default"
          className="bg-studio-gold hover:bg-studio-gold-dark"
        >
          Add New
        </Button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={newServiceName}
          onChange={(e) => setNewServiceName(e.target.value)}
          placeholder="New service name"
          className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 mb-2"
        />
        {selectedService ? (
          <Button
            onClick={handleUpdateService}
            variant="default"
            className="w-full bg-studio-gold hover:bg-studio-gold-dark"
          >
            Update Service
          </Button>
        ) : null}
      </div>
      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-md shadow-sm"
          >
            <span>{service.name}</span>
            <div className="flex space-x-2">
              <Button
                onClick={() => handleEditService(service.id)}
                size="sm"
                variant="outline"
                className="flex items-center gap-1"
              >
                <Pencil className="h-4 w-4" />
                Edit
              </Button>
              <Button
                onClick={() => handleDeleteService(service.id)}
                size="sm"
                variant="destructive"
                className="flex items-center gap-1"
              >
                <Trash2 className="h-4 w-4" />
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceManager;
