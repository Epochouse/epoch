import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Settings,
  Music,
  Video,
  Headphones,
  PenSquare,
  Pencil,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceManager from "@/components/ServiceManager";
import ServiceFeatures from "@/components/ServiceFeatures";
import ServiceImages from "@/components/ServiceImages";
import PortfolioManager from "@/components/PortfolioManager";
import AudioManager from "@/components/AudioManager";
import TeamManager from "@/components/TeamManager";
import BlogManager from "@/components/BlogManager";
import TestimonialManager from "@/components/TestimonialManager";

interface ServiceType {
  id: string;
  name: string;
}

interface PortfolioVideo {
  id: string;
  title: string;
  videoId: string;
  artist: string;
  genre: string;
  description: string;
  featured: boolean;
}

interface AudioTrack {
  id: string;
  title: string;
  artist: string;
  genre?: string; // Add this line
  description?: string;
  services?: string[];
  audioUrl?: string;
  coverUrl?: string;
  featured?: boolean;
}

interface TeamMember {
  id: string;
  name: string;
  position: string;
  email: string;
}

interface BlogPost {
  id: string;
  title: string;
}

interface Testimonial {
  id: string;
  name: string;
  company: string;
}

const Admin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Services state
  const [services, setServices] = useState<ServiceType[]>([
    { id: "1", name: "Background Singers" },
    { id: "2", name: "Show Production" },
    { id: "3", name: "Live Recording" },
    { id: "4", name: "Music Production" },
    { id: "5", name: "Session Musicians" },
    { id: "6", name: "Mixing & Mastering" },
  ]);
  const [selectedService, setSelectedService] = useState<string>("");
  const [newServiceName, setNewServiceName] = useState<string>("");
  const [serviceFeatures, setServiceFeatures] = useState<string>("");
  const [serviceImageUrl, setServiceImageUrl] = useState<string>("");

  // Portfolio state
  const [videos, setVideos] = useState<PortfolioVideo[]>([
    {
      id: "1",
      title: "Studio Session Highlights",
      videoId: "dQw4w9WgXcQ",
      artist: "John Doe",
      genre: "Jazz",
      description: "A highlight of our latest studio session.",
      featured: false,
    },
    {
      id: "2",
      title: "Live Performance Recap",
      videoId: "dQw4w9WgXcQ",
      artist: "Jane Smith",
      genre: "Rock",
      description: "Recap of an amazing live performance.",
      featured: true,
    },
  ]);

  const [tracks, setTracks] = useState<AudioTrack[]>([
    {
      id: "1",
      title: "Ambient Dreams",
      artist: "Sound Studio Productions",
      genre: "Ambient",
      description: "",
      services: [],
      audioUrl: "",
      coverUrl: "",
      featured: false,
    },
    {
      id: "2",
      title: "Urban Rhythm",
      artist: "Beat Masters",
      genre: "Hip Hop",
      description: "",
      services: [],
      audioUrl: "",
      coverUrl: "",
      featured: false,
    },
  ]);
  const [selectedVideo, setSelectedVideo] = useState<string>("");
  const [selectedTrack, setSelectedTrack] = useState<string>("");
  const [newVideoTitle, setNewVideoTitle] = useState<string>("");
  const [newVideoId, setNewVideoId] = useState<string>("");
  const [newTrackTitle, setNewTrackTitle] = useState<string>("");
  const [newTrackArtist, setNewTrackArtist] = useState<string>("");
  const [newTrackUrl, setNewTrackUrl] = useState<string>("");

  // Team state
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: "1",
      name: "John Doe",
      position: "Creative Director",
      email: "john@soundstudio.com",
    },
    {
      id: "2",
      name: "Jane Smith",
      position: "Sound Engineer",
      email: "jane@soundstudio.com",
    },
    {
      id: "3",
      name: "Michael Johnson",
      position: "Music Producer",
      email: "michael@soundstudio.com",
    },
  ]);
  const [selectedTeamMember, setSelectedTeamMember] = useState<string>("");
  const [newMemberName, setNewMemberName] = useState<string>("");
  const [newMemberPosition, setNewMemberPosition] = useState<string>("");
  const [newMemberEmail, setNewMemberEmail] = useState<string>("");

  // Content state
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    { id: "1", title: "5 Tips for Better Home Recording" },
    { id: "2", title: "Choosing the Right Microphone" },
  ]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    { id: "1", name: "Sarah Johnson", company: "Indie Artist" },
    { id: "2", name: "Marcus Williams", company: "Band Manager" },
  ]);
  const [selectedBlogPost, setSelectedBlogPost] = useState<string>("");
  const [newBlogTitle, setNewBlogTitle] = useState<string>("");
  const [selectedTestimonial, setSelectedTestimonial] = useState<string>("");
  const [newTestimonialName, setNewTestimonialName] = useState<string>("");
  const [newTestimonialCompany, setNewTestimonialCompany] =
    useState<string>("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock authentication - in a real app this would be a proper auth system
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true);
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
    }
  };

  // Services handlers
  const handleAddService = () => {
    if (!newServiceName.trim()) {
      toast({
        title: "Service name required",
        description: "Please enter a name for the service",
        variant: "destructive",
      });
      return;
    }

    const newService = {
      id: Date.now().toString(),
      name: newServiceName,
    };

    setServices([...services, newService]);
    setNewServiceName("");

    toast({
      title: "Service added",
      description: `${newServiceName} has been added to services`,
    });
  };

  const handleDeleteService = (id: string) => {
    setServices(services.filter((service) => service.id !== id));
    toast({
      title: "Service deleted",
      description: "The service has been removed",
    });
  };

  const handleEditService = (id: string) => {
    const service = services.find((s) => s.id === id);
    if (service) {
      setSelectedService(id);
      setNewServiceName(service.name);
    }
  };

  const handleUpdateService = () => {
    if (!selectedService || !newServiceName.trim()) return;

    setServices(
      services.map((service) =>
        service.id === selectedService
          ? { ...service, name: newServiceName }
          : service
      )
    );

    setSelectedService("");
    setNewServiceName("");

    toast({
      title: "Service updated",
      description: "The service has been updated successfully",
    });
  };

  const handleUpdateFeatures = () => {
    toast({
      title: "Features updated",
      description: "Service features have been updated",
    });
  };

  const handleUpdateImage = () => {
    toast({
      title: "Image updated",
      description: "Service image has been updated",
    });
  };

  // Portfolio handlers
  const handleAddVideo = () => {
    if (!newVideoTitle.trim() || !newVideoId.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const newVideo: PortfolioVideo = {
      id: Date.now().toString(),
      title: newVideoTitle,
      videoId: newVideoId,
      artist: "",
      genre: "",
      description: "",
      featured: false,
    };

    setVideos([...videos, newVideo]);
    setNewVideoTitle("");
    setNewVideoId("");

    toast({
      title: "Video added",
      description: `${newVideoTitle} has been added to portfolio`,
    });
  };

  const handleEditVideo = (id: string) => {
    const video = videos.find((v) => v.id === id);
    if (video) {
      setSelectedVideo(id);
      setNewVideoTitle(video.title);
      setNewVideoId(video.videoId);
    }
  };

  const handleUpdateVideo = () => {
    if (!selectedVideo || !newVideoTitle.trim() || !newVideoId.trim()) return;

    setVideos(
      videos.map((video) =>
        video.id === selectedVideo
          ? { ...video, title: newVideoTitle, videoId: newVideoId }
          : video
      )
    );

    setSelectedVideo("");
    setNewVideoTitle("");
    setNewVideoId("");

    toast({
      title: "Video updated",
      description: "The video has been updated successfully",
    });
  };

  const handleDeleteVideo = (id: string) => {
    setVideos(videos.filter((video) => video.id !== id));
    toast({
      title: "Video deleted",
      description: "The video has been removed",
    });
  };

  const handleAddTrack = () => {
    if (!newTrackTitle.trim() || !newTrackArtist.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const newTrack = {
      id: Date.now().toString(),
      title: newTrackTitle,
      artist: newTrackArtist,
    };

    setTracks([...tracks, newTrack]);
    setNewTrackTitle("");
    setNewTrackArtist("");
    setNewTrackUrl("");

    toast({
      title: "Track added",
      description: `${newTrackTitle} has been added to portfolio`,
    });
  };

  const handleEditTrack = (id: string) => {
    const track = tracks.find((t) => t.id === id);
    if (track) {
      setSelectedTrack(id);
      setNewTrackTitle(track.title);
      setNewTrackArtist(track.artist);
    }
  };

  const handleUpdateTrack = () => {
    if (!selectedTrack || !newTrackTitle.trim() || !newTrackArtist.trim())
      return;

    setTracks(
      tracks.map((track) =>
        track.id === selectedTrack
          ? { ...track, title: newTrackTitle, artist: newTrackArtist }
          : track
      )
    );

    setSelectedTrack("");
    setNewTrackTitle("");
    setNewTrackArtist("");
    setNewTrackUrl("");

    toast({
      title: "Track updated",
      description: "The track has been updated successfully",
    });
  };

  const handleDeleteTrack = (id: string) => {
    setTracks(tracks.filter((track) => track.id !== id));
    toast({
      title: "Track deleted",
      description: "The track has been removed",
    });
  };

  // Team handlers
  const handleAddTeamMember = () => {
    if (
      !newMemberName.trim() ||
      !newMemberPosition.trim() ||
      !newMemberEmail.trim()
    ) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const newMember = {
      id: Date.now().toString(),
      name: newMemberName,
      position: newMemberPosition,
      email: newMemberEmail,
    };

    setTeamMembers([...teamMembers, newMember]);
    setNewMemberName("");
    setNewMemberPosition("");
    setNewMemberEmail("");

    toast({
      title: "Team member added",
      description: `${newMemberName} has been added to the team`,
    });
  };

  const handleEditTeamMember = (id: string) => {
    const member = teamMembers.find((m) => m.id === id);
    if (member) {
      setSelectedTeamMember(id);
      setNewMemberName(member.name);
      setNewMemberPosition(member.position);
      setNewMemberEmail(member.email);
    }
  };

  const handleUpdateTeamMember = () => {
    if (
      !selectedTeamMember ||
      !newMemberName.trim() ||
      !newMemberPosition.trim() ||
      !newMemberEmail.trim()
    )
      return;

    setTeamMembers(
      teamMembers.map((member) =>
        member.id === selectedTeamMember
          ? {
              ...member,
              name: newMemberName,
              position: newMemberPosition,
              email: newMemberEmail,
            }
          : member
      )
    );

    setSelectedTeamMember("");
    setNewMemberName("");
    setNewMemberPosition("");
    setNewMemberEmail("");

    toast({
      title: "Team member updated",
      description: "The team member has been updated successfully",
    });
  };

  const handleDeleteTeamMember = (id: string) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
    toast({
      title: "Team member deleted",
      description: "The team member has been removed",
    });
  };

  // Content handlers
  const handleAddBlogPost = () => {
    if (!newBlogTitle.trim()) {
      toast({
        title: "Blog title required",
        description: "Please enter a title for the blog post",
        variant: "destructive",
      });
      return;
    }

    const newPost = {
      id: Date.now().toString(),
      title: newBlogTitle,
    };

    setBlogPosts([...blogPosts, newPost]);
    setNewBlogTitle("");

    toast({
      title: "Blog post added",
      description: "New blog post has been created",
    });
  };

  const handleEditBlogPost = (id: string) => {
    const post = blogPosts.find((p) => p.id === id);
    if (post) {
      setSelectedBlogPost(id);
      setNewBlogTitle(post.title);
    }
  };

  const handleUpdateBlogPost = () => {
    if (!selectedBlogPost || !newBlogTitle.trim()) return;

    setBlogPosts(
      blogPosts.map((post) =>
        post.id === selectedBlogPost ? { ...post, title: newBlogTitle } : post
      )
    );

    setSelectedBlogPost("");
    setNewBlogTitle("");

    toast({
      title: "Blog post updated",
      description: "The blog post has been updated successfully",
    });
  };

  const handleDeleteBlogPost = (id: string) => {
    setBlogPosts(blogPosts.filter((post) => post.id !== id));
    toast({
      title: "Blog post deleted",
      description: "The blog post has been removed",
    });
  };

  const handleAddTestimonial = () => {
    if (!newTestimonialName.trim() || !newTestimonialCompany.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const newTestimonial = {
      id: Date.now().toString(),
      name: newTestimonialName,
      company: newTestimonialCompany,
    };

    setTestimonials([...testimonials, newTestimonial]);
    setNewTestimonialName("");
    setNewTestimonialCompany("");

    toast({
      title: "Testimonial added",
      description: "New testimonial has been added",
    });
  };

  const handleEditTestimonial = (id: string) => {
    const testimonial = testimonials.find((t) => t.id === id);
    if (testimonial) {
      setSelectedTestimonial(id);
      setNewTestimonialName(testimonial.name);
      setNewTestimonialCompany(testimonial.company);
    }
  };

  const handleUpdateTestimonial = () => {
    if (
      !selectedTestimonial ||
      !newTestimonialName.trim() ||
      !newTestimonialCompany.trim()
    )
      return;

    setTestimonials(
      testimonials.map((testimonial) =>
        testimonial.id === selectedTestimonial
          ? {
              ...testimonial,
              name: newTestimonialName,
              company: newTestimonialCompany,
            }
          : testimonial
      )
    );

    setSelectedTestimonial("");
    setNewTestimonialName("");
    setNewTestimonialCompany("");

    toast({
      title: "Testimonial updated",
      description: "The testimonial has been updated successfully",
    });
  };

  const handleDeleteTestimonial = (id: string) => {
    setTestimonials(
      testimonials.filter((testimonial) => testimonial.id !== id)
    );
    toast({
      title: "Testimonial deleted",
      description: "The testimonial has been removed",
    });
  };

  // Navigation handler
  const handleBackToSite = () => {
    navigate("/");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white dark:bg-studio-dark flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Admin Login</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Please enter your credentials to access the admin dashboard
            </p>
          </div>
          <div className="glass-panel dark:glass-panel-dark rounded-xl p-8">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium mb-1"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-studio-gold text-white rounded-md hover:bg-studio-gold-dark transition-colors"
              >
                Login
              </button>
            </form>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>For demo purposes, use:</p>
            <p>Username: admin</p>
            <p>Password: password</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-4">
            <button
              onClick={handleBackToSite}
              className="py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Back to Site
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span>Services</span>
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              <span>Portfolio</span>
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Team</span>
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <PenSquare className="h-4 w-4" />
              <span>Content</span>
            </TabsTrigger>
          </TabsList>

          {/* Services Tab */}
          <TabsContent value="services">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceManager
                services={services}
                newServiceName={newServiceName}
                selectedService={selectedService}
                setNewServiceName={setNewServiceName}
                handleAddService={handleAddService}
                handleEditService={handleEditService}
                handleDeleteService={handleDeleteService}
                handleUpdateService={handleUpdateService}
              />
              <ServiceFeatures
                services={services}
                selectedService={selectedService}
                setSelectedService={setSelectedService}
                serviceFeatures={serviceFeatures}
                setServiceFeatures={setServiceFeatures}
                handleUpdateFeatures={handleUpdateFeatures}
              />
              <ServiceImages
                services={services}
                selectedService={selectedService}
                setSelectedService={setSelectedService}
                serviceImageUrl={serviceImageUrl}
                setServiceImageUrl={setServiceImageUrl}
                handleUpdateImage={handleUpdateImage}
              />
            </div>
          </TabsContent>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PortfolioManager
                videos={videos}
                newVideoTitle={newVideoTitle}
                newVideoId={newVideoId}
                selectedVideo={selectedVideo}
                setNewVideoTitle={setNewVideoTitle}
                setNewVideoId={setNewVideoId}
                handleAddVideo={handleAddVideo}
                handleEditVideo={handleEditVideo}
                handleDeleteVideo={handleDeleteVideo}
                handleUpdateVideo={handleUpdateVideo}
              />
              <AudioManager
                tracks={tracks}
                newTrackTitle={newTrackTitle}
                newTrackArtist={newTrackArtist}
                newTrackUrl={newTrackUrl}
                selectedTrack={selectedTrack}
                setNewTrackTitle={setNewTrackTitle}
                setNewTrackArtist={setNewTrackArtist}
                setNewTrackUrl={setNewTrackUrl}
                handleAddTrack={handleAddTrack}
                handleEditTrack={handleEditTrack}
                handleDeleteTrack={handleDeleteTrack}
                handleUpdateTrack={handleUpdateTrack}
              />
            </div>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team">
            <TeamManager
              teamMembers={teamMembers}
              newMemberName={newMemberName}
              newMemberPosition={newMemberPosition}
              newMemberEmail={newMemberEmail}
              selectedTeamMember={selectedTeamMember}
              setNewMemberName={setNewMemberName}
              setNewMemberPosition={setNewMemberPosition}
              setNewMemberEmail={setNewMemberEmail}
              handleAddTeamMember={handleAddTeamMember}
              handleEditTeamMember={handleEditTeamMember}
              handleDeleteTeamMember={handleDeleteTeamMember}
              handleUpdateTeamMember={handleUpdateTeamMember}
            />
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BlogManager
                blogPosts={blogPosts}
                newBlogTitle={newBlogTitle}
                selectedBlogPost={selectedBlogPost}
                setNewBlogTitle={setNewBlogTitle}
                handleAddBlogPost={handleAddBlogPost}
                handleEditBlogPost={handleEditBlogPost}
                handleDeleteBlogPost={handleDeleteBlogPost}
                handleUpdateBlogPost={handleUpdateBlogPost}
              />
              <TestimonialManager
                testimonials={testimonials}
                newTestimonialName={newTestimonialName}
                newTestimonialCompany={newTestimonialCompany}
                selectedTestimonial={selectedTestimonial}
                setNewTestimonialName={setNewTestimonialName}
                setNewTestimonialCompany={setNewTestimonialCompany}
                handleAddTestimonial={handleAddTestimonial}
                handleEditTestimonial={handleEditTestimonial}
                handleDeleteTestimonial={handleDeleteTestimonial}
                handleUpdateTestimonial={handleUpdateTestimonial}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
