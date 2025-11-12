interface TeamMemberCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
}

const TeamMemberCard = ({ name, title, bio, image }: TeamMemberCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm card-hover">
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full object-cover object-[center_20%] border-4 border-primary/10"
        />
      </div>
      <h3 className="text-xl font-bold text-center mb-2">{name}</h3>
      <p className="text-primary font-semibold text-center mb-4">{title}</p>
      <p className="text-sm text-muted-foreground text-center leading-relaxed italic">{bio}</p>
    </div>
  );
};

export default TeamMemberCard;
