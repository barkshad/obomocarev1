import { motion } from 'framer-motion';

export default function Team() {
  const teamMembers = [
    {
      name: "Dr. Sarah Mokaya",
      role: "Executive Director & Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      bio: "With over 15 years in public health, Dr. Mokaya founded OBOMOCARE to address the critical gaps she witnessed in rural healthcare delivery."
    },
    {
      name: "David Ochieng",
      role: "Head of Logistics",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
      bio: "David orchestrates our complex supply chains, ensuring food and medical supplies reach the most remote households on time."
    },
    {
      name: "Grace Nyambura",
      role: "Chief Medical Coordinator",
      image: "https://images.unsplash.com/photo-1594824436951-7f12620ce6f8?auto=format&fit=crop&q=80&w=800",
      bio: "A certified nurse practitioner, Grace leads our Maternal Health and Elderly Support programs, overseeing clinical standards and volunteer training."
    },
    {
      name: "Peter Kamau",
      role: "Community Outreach Lead",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
      bio: "Peter builds the essential trust between OBOMOCARE and local leaders, acting as the primary liaison for community feedback and needs assessment."
    }
  ];

  return (
    <>
      <header className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto text-center relative overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl font-bold text-primary-container mb-6"
        >
          Meet the <span className="text-secondary-container">Team</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto"
        >
          Dedicated professionals united by a singular mission: bringing dignified care to those who need it most.
        </motion.p>
      </header>

      <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden border border-outline-variant/30 shadow-sm group"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary">{member.name}</h3>
                <p className="text-secondary-container text-sm font-bold uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-on-surface-variant text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section className="bg-surface-container-low py-16 text-center">
        <p className="text-xl text-primary font-bold">And over 120 dedicated community volunteers.</p>
      </section>
    </>
  );
}
