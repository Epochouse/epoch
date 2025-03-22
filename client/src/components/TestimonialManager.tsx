import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

const TestimonialManager = ({
  testimonials,
  newTestimonialName,
  newTestimonialCompany,
  selectedTestimonial,
  setNewTestimonialName,
  setNewTestimonialCompany,
  handleAddTestimonial,
  handleEditTestimonial,
  handleDeleteTestimonial,
  handleUpdateTestimonial,
}) => {
  return (
    <div className="glass-panel dark:glass-panel-dark rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">Testimonials</h2>
      <div className="mb-6 space-y-4">
        {selectedTestimonial && (
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                value={newTestimonialName}
                onChange={(e) => setNewTestimonialName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium mb-1">Company</label>
              <input
                type="text"
                className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                value={newTestimonialCompany}
                onChange={(e) => setNewTestimonialCompany(e.target.value)}
              />
            </div>
            <Button
              onClick={handleUpdateTestimonial}
              variant="default"
              className="w-full bg-studio-gold hover:bg-studio-gold-dark"
            >
              Update Testimonial
            </Button>
          </div>
        )}
      </div>
      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-md shadow-sm"
          >
            <span>
              {testimonial.name} - {testimonial.company}
            </span>
            <div className="flex space-x-2">
              <Button
                onClick={() => handleEditTestimonial(testimonial.id)}
                size="sm"
                variant="outline"
                className="flex items-center gap-1"
              >
                <Pencil className="h-4 w-4" />
                Edit
              </Button>
              <Button
                onClick={() => handleDeleteTestimonial(testimonial.id)}
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
      <div className="mt-6 space-y-4">
        <div className="flex flex-col">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            placeholder="Enter testimonial name"
            value={newTestimonialName}
            onChange={(e) => setNewTestimonialName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="block text-sm font-medium mb-1">Company</label>
          <input
            type="text"
            className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            placeholder="Enter company name"
            value={newTestimonialCompany}
            onChange={(e) => setNewTestimonialCompany(e.target.value)}
          />
        </div>
        <Button
          onClick={handleAddTestimonial}
          variant="default"
          className="w-full bg-studio-gold hover:bg-studio-gold-dark"
        >
          Add New Testimonial
        </Button>
      </div>
    </div>
  );
};

export default TestimonialManager;
