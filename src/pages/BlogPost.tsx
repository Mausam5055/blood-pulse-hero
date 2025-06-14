
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowLeft, Heart, Share2, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog data - in real app, this would come from a database
  const blogPosts = {
    '1': {
      id: 1,
      title: 'The Science Behind Blood Types: What Every Donor Should Know',
      content: `
        <p>Blood donation is one of the most critical medical procedures that saves millions of lives annually. Understanding the science behind blood types is essential for both donors and recipients to ensure safe and effective transfusions.</p>
        
        <h2>Understanding the ABO System</h2>
        <p>The ABO blood group system, discovered by Karl Landsteiner in 1901, classifies human blood into four main types: A, B, AB, and O. This classification is based on the presence or absence of specific antigens on the surface of red blood cells.</p>
        
        <h3>Type A Blood</h3>
        <p>Individuals with Type A blood have A antigens on their red blood cells and anti-B antibodies in their plasma. This means they can donate to people with Type A and Type AB blood, and can receive blood from Type A and Type O donors.</p>
        
        <h3>Type B Blood</h3>
        <p>Type B blood contains B antigens on red blood cells and anti-A antibodies in plasma. Type B individuals can donate to Type B and Type AB recipients, and can receive from Type B and Type O donors.</p>
        
        <h3>Type AB Blood - The Universal Recipient</h3>
        <p>Type AB blood has both A and B antigens but no anti-A or anti-B antibodies. This makes Type AB individuals universal recipients for red blood cells, as they can receive blood from any ABO type.</p>
        
        <h3>Type O Blood - The Universal Donor</h3>
        <p>Type O blood has no A or B antigens but contains both anti-A and anti-B antibodies. Type O negative is known as the universal donor because it can be given to patients of any blood type in emergency situations.</p>
        
        <h2>The Rh Factor</h2>
        <p>The Rh factor is another crucial component of blood typing. It refers to the presence (+) or absence (-) of the RhD antigen on red blood cells. This creates eight main blood types: A+, A-, B+, B-, AB+, AB-, O+, and O-.</p>
        
        <h2>Why Blood Type Matters</h2>
        <p>Incompatible blood transfusions can trigger severe immune reactions, including:</p>
        <ul>
          <li>Hemolytic transfusion reactions</li>
          <li>Acute kidney failure</li>
          <li>Shock and potentially death</li>
        </ul>
        
        <h2>The Donation Process</h2>
        <p>Modern blood donation is a carefully controlled process that ensures both donor safety and blood quality. The entire process typically takes 45-60 minutes, with the actual blood collection lasting only 8-12 minutes.</p>
        
        <h3>Pre-Donation Screening</h3>
        <p>Every donor undergoes thorough screening including:</p>
        <ul>
          <li>Medical history questionnaire</li>
          <li>Mini-physical examination</li>
          <li>Hemoglobin level testing</li>
          <li>Blood pressure and pulse check</li>
        </ul>
        
        <h2>Recent Advances in Blood Science</h2>
        <p>Recent research has led to exciting developments in blood science, including artificial blood substitutes, improved storage methods, and better compatibility testing techniques.</p>
        
        <h3>Artificial Blood</h3>
        <p>Scientists are developing artificial blood substitutes that could potentially address blood shortages. These products, while not yet ready for widespread use, show promise for emergency situations.</p>
        
        <h3>Pathogen Reduction Technology</h3>
        <p>New technologies are being implemented to reduce the risk of pathogen transmission through blood transfusions, making the blood supply even safer.</p>
        
        <h2>Conclusion</h2>
        <p>Understanding blood types and the science behind blood donation helps create more informed donors and contributes to a safer, more efficient blood supply system. Every donation matters, and with proper knowledge, we can continue to save lives through this remarkable medical procedure.</p>
      `,
      excerpt: 'Discover the fascinating science behind blood types and why understanding them is crucial for safe blood donation and transfusion.',
      author: 'Dr. Sarah Mitchell',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Medical Science',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Blood Types', 'Medical Science', 'Donation Process', 'Health Education']
    },
    '2': {
      id: 2,
      title: 'Community Heroes: Stories of Life-Saving Blood Donations',
      content: `
        <p>Behind every pint of donated blood lies a story of compassion, courage, and community spirit. Today, we share inspiring stories from our donor community that showcase the profound impact of blood donation.</p>
        
        <h2>Maria's Story: A Mother's Gift</h2>
        <p>Maria Rodriguez began donating blood after her daughter was born prematurely and required multiple transfusions. "I realized that someone else's donation saved my daughter's life," Maria recalls. "I wanted to give that same gift to other families."</p>
        
        <p>Over the past five years, Maria has donated 24 times, potentially helping up to 72 people. Her dedication earned her our Gold Donor status, but for Maria, the real reward is knowing she's making a difference.</p>
        
        <h2>The Emergency That Changed Everything</h2>
        <p>John Thompson was a regular donor until a car accident changed his perspective entirely. "I was the one receiving blood instead of giving it," John remembers. "Twenty-three units of blood products saved my life that night."</p>
        
        <p>After his recovery, John became not just a donor but an advocate, organizing workplace blood drives that have collected over 500 units in the past two years.</p>
        
        <h2>Breaking Barriers: Diverse Donors Matter</h2>
        <p>Our community represents the beautiful diversity of our city. From college students to retirees, from tech workers to teachers, every donor brings something special to our mission.</p>
        
        <h3>Student Success</h3>
        <p>Local university students have formed the "Life Savers Club," organizing monthly donation events that have become some of our most successful drives. Their energy and commitment inspire donors of all ages.</p>
        
        <h2>The Ripple Effect</h2>
        <p>One donation can help multiple patients. Red blood cells can be given to trauma victims, platelets support cancer patients undergoing chemotherapy, and plasma helps burn victims and those with immune disorders.</p>
        
        <h3>By the Numbers</h3>
        <ul>
          <li>1 donation can save up to 3 lives</li>
          <li>Every 2 seconds, someone needs blood</li>
          <li>Only 3% of eligible donors actually donate</li>
          <li>The average red blood cell transfusion is 3 units</li>
        </ul>
        
        <h2>Overcoming Fear and Myths</h2>
        <p>Many potential donors hesitate due to misconceptions about the donation process. Our experienced staff and comfortable facilities make donation as easy and pleasant as possible.</p>
        
        <h3>Common Concerns Addressed</h3>
        <p><strong>Pain:</strong> Most donors report feeling only a brief pinch, similar to a routine blood test.</p>
        <p><strong>Time:</strong> The entire process takes about an hour, with actual donation lasting 8-12 minutes.</p>
        <p><strong>Health Impact:</strong> Healthy adults can safely donate every 56 days with no adverse effects.</p>
        
        <h2>Special Recognition</h2>
        <p>We're proud to recognize our milestone donors who have made extraordinary commitments to saving lives:</p>
        <ul>
          <li>Platinum Donors (50+ donations): 47 heroes</li>
          <li>Diamond Donors (100+ donations): 12 legends</li>
          <li>Lifetime Achievement (200+ donations): 3 true champions</li>
        </ul>
        
        <h2>Join Our Community</h2>
        <p>Every new donor strengthens our community's ability to respond to emergencies and support ongoing medical needs. Whether you're giving for the first time or the fiftieth, you're part of something bigger than yourself.</p>
        
        <h3>How to Get Started</h3>
        <p>Joining our donor community is simple. Schedule an appointment online, visit one of our convenient locations, or attend a mobile drive in your neighborhood. Our friendly staff will guide you through every step.</p>
        
        <h2>Looking Forward</h2>
        <p>As our community grows, so does our impact. With new technologies, improved processes, and an expanding network of donors, we're better equipped than ever to meet the blood needs of our region.</p>
        
        <p>Your story could be next. Every donation matters, every donor is a hero, and together, we're saving lives one pint at a time.</p>
      `,
      excerpt: 'Read inspiring stories from our donor community and discover how everyday heroes are making a life-saving difference.',
      author: 'Community Team',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Community Stories',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Community', 'Donor Stories', 'Heroes', 'Impact']
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-soft-white mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button className="bg-gradient-to-r from-neon-pink to-electric-cyan text-white">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 z-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <Navbar />
      
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8 animate-fade-in">
            <Link to="/blog">
              <Button variant="outline" className="border-electric-cyan/20 text-electric-cyan hover:bg-electric-cyan/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <div className="glass-card p-8 rounded-2xl mb-8 animate-slide-up">
            <div className="mb-6">
              <Badge className="bg-neon-pink/20 text-neon-pink mb-4">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-soft-white mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-dark-text/70 mb-6">
                {post.excerpt}
              </p>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-dark-text/60">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex gap-4 mt-6 pt-6 border-t border-white/10">
              <Button size="sm" variant="outline" className="border-electric-cyan/20 text-electric-cyan">
                <Heart className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button size="sm" variant="outline" className="border-electric-cyan/20 text-electric-cyan">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 animate-fade-in">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Article Content */}
          <div className="glass-card p-8 rounded-2xl mb-8 animate-slide-up">
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                color: '#EAEAEA',
                lineHeight: '1.8'
              }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-lg font-semibold text-soft-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-electric-cyan/20 text-dark-text"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="glass-card p-8 rounded-2xl text-center animate-slide-up">
            <h3 className="text-2xl font-bold text-soft-white mb-4">
              Inspired to Make a Difference?
            </h3>
            <p className="text-dark-text/70 mb-6">
              Join our community of life-savers and help us continue making an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button className="bg-gradient-to-r from-neon-pink to-electric-cyan text-white px-8 py-3">
                  Become a Donor
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-electric-cyan/20 text-electric-cyan px-8 py-3">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
