import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';

const BlogPost = () => {
  const { id } = useParams();

  // Blog posts data with enhanced content
  const blogPosts = {
    '1': {
      title: 'The Science Behind Blood Donation: What Happens to Your Body',
      author: 'Dr. Sarah Mitchell',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Health & Science',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Understanding the physiological process of blood donation and its impact on your health.',
      content: `
        <p class="lead-paragraph">Blood donation is one of the most selfless acts a person can perform, but have you ever wondered what actually happens to your body when you donate blood? Understanding this process can help alleviate fears and encourage more people to become regular donors.</p>

        <h2>The Pre-Donation Process</h2>
        <p>Before you donate, your body undergoes several checks to ensure both your safety and the quality of the donated blood. Medical professionals check your hemoglobin levels, blood pressure, pulse, and temperature. This screening process is crucial because it ensures that donation won't negatively impact your health.</p>

        <blockquote>
          <p>"The human body is remarkably resilient. A healthy adult can donate up to 450ml of blood every 8 weeks without any adverse effects."</p>
          <cite>— Dr. Sarah Mitchell, Hematologist</cite>
        </blockquote>

        <h2>During the Donation</h2>
        <p>When you donate blood, you're typically giving about 450-500ml of whole blood, which represents roughly 8-10% of your total blood volume. The actual donation process takes only 8-15 minutes, during which your body immediately begins compensating for the blood loss.</p>

        <h3>Immediate Body Response</h3>
        <ul>
          <li><strong>Plasma Volume Recovery:</strong> Your body begins replacing the plasma (liquid portion) within hours</li>
          <li><strong>Heart Rate Adjustment:</strong> Your heart may beat slightly faster to maintain circulation</li>
          <li><strong>Blood Pressure Regulation:</strong> Your cardiovascular system adjusts to maintain normal pressure</li>
        </ul>

        <h2>Post-Donation Recovery</h2>
        <p>The recovery process is fascinating and demonstrates the incredible regenerative capacity of the human body:</p>

        <h3>First 24-48 Hours</h3>
        <p>Your bone marrow receives signals to increase red blood cell production. The plasma volume is typically restored within 24-48 hours as your body retains more fluid and increases fluid intake.</p>

        <h3>First Week</h3>
        <p>White blood cells and platelets return to normal levels relatively quickly, usually within a few days to a week.</p>

        <h3>6-8 Weeks</h3>
        <p>Red blood cells take the longest to replace, with full restoration typically occurring within 6-8 weeks. This is why there's a minimum 8-week waiting period between whole blood donations.</p>

        <h2>Health Benefits for Donors</h2>
        <p>Surprisingly, regular blood donation can offer several health benefits:</p>
        
        <div class="benefits-grid">
          <div class="benefit-item">
            <h4>Iron Level Regulation</h4>
            <p>Regular donation helps prevent iron overload, which can be harmful to your organs.</p>
          </div>
          <div class="benefit-item">
            <h4>Cardiovascular Health</h4>
            <p>Some studies suggest that regular donation may reduce the risk of heart disease.</p>
          </div>
          <div class="benefit-item">
            <h4>Free Health Screening</h4>
            <p>Each donation includes basic health checks and blood testing.</p>
          </div>
        </div>

        <h2>Optimizing Your Recovery</h2>
        <p>To ensure the best recovery after donation:</p>
        <ul>
          <li>Stay hydrated by drinking plenty of fluids</li>
          <li>Eat iron-rich foods like spinach, red meat, and beans</li>
          <li>Avoid strenuous exercise for 24 hours</li>
          <li>Get adequate sleep to support your body's recovery processes</li>
        </ul>

        <h2>The Bigger Picture</h2>
        <p>Your single donation can save up to three lives. The blood you donate is separated into components:</p>
        <ul>
          <li><strong>Red blood cells:</strong> Used for trauma patients and surgery</li>
          <li><strong>Plasma:</strong> Helps burn victims and patients with clotting disorders</li>
          <li><strong>Platelets:</strong> Critical for cancer patients and those with blood disorders</li>
        </ul>

        <p>Understanding what happens to your body during and after blood donation can help you feel more confident about the process. Your body is designed to handle this temporary loss of blood, and the benefits to recipients are immeasurable.</p>

        <p class="conclusion">Remember, every donation matters. By understanding the science behind blood donation, you're not just helping others – you're taking an active role in one of medicine's most fundamental life-saving processes.</p>
      `
    },
    '2': {
      title: 'The Impact of Blood Type on Health: A Comprehensive Guide',
      author: 'Emily Carter',
      date: '2024-01-22',
      readTime: '10 min read',
      category: 'Health & Wellness',
      image: 'https://images.unsplash.com/photo-1584735935682-5f1473922549?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Explore how your blood type can influence your health, diet, and overall well-being.',
      content: `
        <p class="lead-paragraph">Your blood type is more than just a label; it's a genetic marker that can influence various aspects of your health. Understanding the nuances of your blood type can provide insights into your susceptibility to certain diseases, optimal dietary choices, and even personality traits.</p>

        <h2>Understanding Blood Types</h2>
        <p>The ABO blood group system classifies blood into four main types: A, B, AB, and O. These types are determined by the presence or absence of A and B antigens on the surface of red blood cells. Additionally, the Rh factor (positive or negative) further categorizes blood types.</p>

        <h3>The ABO System</h3>
        <ul>
          <li><strong>Type A:</strong> Red blood cells have A antigens</li>
          <li><strong>Type B:</strong> Red blood cells have B antigens</li>
          <li><strong>Type AB:</strong> Red blood cells have both A and B antigens</li>
          <li><strong>Type O:</strong> Red blood cells have neither A nor B antigens</li>
        </ul>

        <h3>The Rh Factor</h3>
        <p>The Rh factor is another antigen that can be present (+) or absent (-) on red blood cells. If you have the Rh antigen, you are Rh-positive; if not, you are Rh-negative.</p>

        <h2>Health Implications of Blood Types</h2>
        <p>Research suggests that certain blood types may be associated with a higher or lower risk of specific health conditions:</p>

        <h3>Type A</h3>
        <ul>
          <li><strong>Higher Risk:</strong> Stomach cancer, heart disease</li>
          <li><strong>Lower Risk:</strong> Type 2 diabetes</li>
        </ul>

        <h3>Type B</h3>
        <ul>
          <li><strong>Higher Risk:</strong> Ovarian cancer</li>
          <li><strong>Lower Risk:</strong> Heart disease</li>
        </ul>

        <h3>Type AB</h3>
        <ul>
          <li><strong>Higher Risk:</strong> Cognitive impairment, stroke</li>
          <li><strong>Lower Risk:</strong> None established</li>
        </ul>

        <h3>Type O</h3>
        <ul>
          <li><strong>Higher Risk:</strong> Ulcers, Achilles tendon rupture</li>
          <li><strong>Lower Risk:</strong> Heart disease, cognitive impairment</li>
        </ul>

        <blockquote>
          <p>"While blood type can influence your health risks, it's essential to remember that lifestyle factors like diet, exercise, and smoking habits play a much more significant role."</p>
          <cite>— Emily Carter, Geneticist</cite>
        </blockquote>

        <h2>Dietary Recommendations Based on Blood Type</h2>
        <p>The "Blood Type Diet," popularized by Dr. Peter D'Adamo, suggests that people should eat foods that align with their blood type to optimize health. While this diet is controversial, here are some general recommendations:</p>

        <h3>Type A</h3>
        <ul>
          <li><strong>Focus:</strong> Vegetarian diet with plenty of fruits, vegetables, and whole grains</li>
          <li><strong>Avoid:</strong> Red meat, dairy, and processed foods</li>
        </ul>

        <h3>Type B</h3>
        <ul>
          <li><strong>Focus:</strong> Balanced diet with meat, dairy, and vegetables</li>
          <li><strong>Avoid:</strong> Chicken, corn, and lentils</li>
        </ul>

        <h3>Type AB</h3>
        <ul>
          <li><strong>Focus:</strong> Combination of Type A and Type B diets</li>
          <li><strong>Avoid:</strong> Smoked meats, caffeine, and alcohol</li>
        </ul>

        <h3>Type O</h3>
        <ul>
          <li><strong>Focus:</strong> High-protein diet with meat, fish, and poultry</li>
          <li><strong>Avoid:</strong> Grains, legumes, and dairy</li>
        </ul>

        <h2>Blood Type and Personality</h2>
        <p>In some cultures, particularly in Japan, blood type is believed to influence personality traits. While there's no scientific evidence to support these claims, here are some common associations:</p>

        <h3>Type A</h3>
        <ul>
          <li><strong>Traits:</strong> Organized, responsible, and detail-oriented</li>
        </ul>

        <h3>Type B</h3>
        <ul>
          <li><strong>Traits:</strong> Creative, passionate, and individualistic</li>
        </ul>

        <h3>Type AB</h3>
        <ul>
          <li><strong>Traits:</strong> Diplomatic, adaptable, and complex</li>
        </ul>

        <h3>Type O</h3>
        <ul>
          <li><strong>Traits:</strong> Confident, ambitious, and resilient</li>
        </ul>

        <h2>The Importance of Knowing Your Blood Type</h2>
        <p>Knowing your blood type is crucial for several reasons:</p>
        <ul>
          <li><strong>Blood Transfusions:</strong> Ensures compatibility during transfusions</li>
          <li><strong>Organ Transplants:</strong> Essential for matching donors and recipients</li>
          <li><strong>Pregnancy:</strong> Prevents Rh incompatibility issues</li>
        </ul>

        <p>Understanding the impact of your blood type on health, diet, and personality can provide valuable insights into your overall well-being. While blood type is just one factor among many, it's a fascinating aspect of your genetic makeup that can influence various aspects of your life.</p>

        <p class="conclusion">Remember, your blood type is a unique identifier that can offer clues about your health risks and dietary needs. By understanding your blood type, you can make informed decisions to optimize your well-being and live a healthier life.</p>
      `
    },
    '3': {
      title: 'Debunking Myths About Blood Donation: Separating Fact from Fiction',
      author: 'David Rodriguez',
      date: '2024-01-29',
      readTime: '7 min read',
      category: 'Community & Awareness',
      image: 'https://images.unsplash.com/photo-1623422422307-4096c8c024ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Addressing common misconceptions about blood donation to encourage more people to donate and save lives.',
      content: `
        <p class="lead-paragraph">Blood donation is a life-saving act that relies on the generosity of volunteers. However, many myths and misconceptions prevent people from donating. Let's debunk some of these common myths to encourage more people to become regular blood donors.</p>

        <h2>Myth 1: Blood Donation is Painful</h2>
        <p><strong>Fact:</strong> Blood donation involves a brief, mild discomfort. The needle prick lasts only a few seconds, and most donors report feeling little to no pain during the process.</p>

        <h2>Myth 2: It Takes Too Long to Donate Blood</h2>
        <p><strong>Fact:</strong> The entire blood donation process, including registration, screening, donation, and post-donation refreshments, typically takes less than an hour. The actual donation itself takes only 8-15 minutes.</p>

        <h2>Myth 3: Donating Blood is Unsafe</h2>
        <p><strong>Fact:</strong> Blood donation is very safe. Sterile, single-use equipment is used for each donor, eliminating the risk of infection. Medical professionals ensure that donors meet specific health criteria to prevent any adverse effects.</p>

        <h2>Myth 4: I Can't Donate Blood Because I Have a Medical Condition</h2>
        <p><strong>Fact:</strong> Many people with medical conditions can still donate blood. Eligibility depends on the specific condition and whether it poses a risk to the donor or recipient. Consult with a healthcare provider or blood donation center to determine your eligibility.</p>

        <h2>Myth 5: Donating Blood Makes You Weak</h2>
        <p><strong>Fact:</strong> Donating blood does not make you weak. Your body quickly replenishes the lost blood volume within 24-48 hours. Eating iron-rich foods and staying hydrated can help speed up the recovery process.</p>

        <blockquote>
          <p>"Don't let myths and misconceptions prevent you from donating blood. Your single donation can save up to three lives and make a real difference in your community."</p>
          <cite>— David Rodriguez, Community Health Advocate</cite>
        </blockquote>

        <h2>Myth 6: I Can't Donate Blood Because I'm Taking Medication</h2>
        <p><strong>Fact:</strong> Many medications do not disqualify you from donating blood. Common medications like birth control pills, allergy medications, and some antidepressants are generally acceptable. Check with the blood donation center to confirm if your specific medication is permissible.</p>

        <h2>Myth 7: Donating Blood is Only for Certain Blood Types</h2>
        <p><strong>Fact:</strong> All blood types are needed for blood donation. While certain blood types, like O-negative, are universal donors and always in high demand, every blood type plays a crucial role in meeting the needs of patients.</p>

        <h2>Myth 8: I Can't Donate Blood Because I Recently Got a Tattoo or Piercing</h2>
        <p><strong>Fact:</strong> You may need to wait a certain period after getting a tattoo or piercing before donating blood to reduce the risk of infection. The waiting period is typically 3-12 months, depending on the regulations of the blood donation center.</p>

        <h2>Myth 9: Donating Blood is Only Necessary During Emergencies</h2>
        <p><strong>Fact:</strong> Blood is needed every day for various medical procedures, including surgeries, cancer treatments, and chronic illnesses. Regular blood donation is essential to maintain a stable blood supply and meet the ongoing needs of patients.</p>

        <h2>Myth 10: I'm Too Old to Donate Blood</h2>
        <p><strong>Fact:</strong> There is no upper age limit for blood donation. As long as you meet the health criteria and feel well, you can continue donating blood regardless of your age.</p>

        <p>By debunking these common myths about blood donation, we can encourage more people to donate and save lives. Blood donation is a safe, simple, and selfless act that makes a significant impact on the lives of patients in need.</p>

        <p class="conclusion">Remember, your blood donation can help save lives and support your community. Don't let myths and misconceptions prevent you from becoming a regular blood donor. Every donation counts!</p>
      `
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-space-navy to-electric-cyan/10 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-soft-white mb-4">Post Not Found</h1>
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
    <div className="min-h-screen bg-gradient-to-br from-space-navy to-electric-cyan/10">
      <Navbar />
      
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="w-full max-w-none">
          {/* Back Button */}
          <div className="mb-8 animate-fade-in">
            <Link to="/blog">
              <Button variant="outline" className="border-electric-cyan/20 text-soft-white hover:bg-electric-cyan/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <div className="glass-card p-6 sm:p-8 lg:p-12 rounded-2xl mb-8 animate-slide-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-neon-pink/20 text-neon-pink rounded-full">
                    {post.category}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-soft-white mb-6 leading-tight">
                  {post.title}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-dark-text/70 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-dark-text/60 mb-6">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span className="text-sm">{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{post.readTime}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="bg-gradient-to-r from-neon-pink to-electric-cyan text-white">
                    <Heart className="w-4 h-4 mr-2" />
                    Like
                  </Button>
                  <Button size="sm" variant="outline" className="border-electric-cyan/20 text-soft-white">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm" variant="outline" className="border-electric-cyan/20 text-soft-white">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Comment
                  </Button>
                </div>
              </div>
              
              <div className="lg:order-first">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="glass-card p-6 sm:p-8 lg:p-12 rounded-2xl animate-slide-up">
            <div 
              className="article-content prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>

      <style>
        {`
          .article-content {
            color: #EAEAEA;
            line-height: 1.8;
          }
          
          .article-content .lead-paragraph {
            font-size: 1.25rem;
            font-weight: 400;
            margin-bottom: 2rem;
            color: #5EEAD4;
          }
          
          .article-content h2 {
            font-size: 2rem;
            font-weight: 700;
            margin: 2.5rem 0 1rem 0;
            color: #FF6B81;
            border-bottom: 2px solid #FF6B81;
            padding-bottom: 0.5rem;
          }
          
          .article-content h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin: 2rem 0 1rem 0;
            color: #5EEAD4;
          }
          
          .article-content h4 {
            font-size: 1.25rem;
            font-weight: 600;
            margin: 1.5rem 0 0.5rem 0;
            color: #FF6B81;
          }
          
          .article-content p {
            margin-bottom: 1.5rem;
            font-size: 1.125rem;
          }
          
          .article-content ul, .article-content ol {
            margin-bottom: 1.5rem;
            padding-left: 2rem;
          }
          
          .article-content li {
            margin-bottom: 0.5rem;
            font-size: 1.125rem;
          }
          
          .article-content strong {
            color: #FF6B81;
            font-weight: 600;
          }
          
          .article-content blockquote {
            border-left: 4px solid #5EEAD4;
            padding: 1.5rem 2rem;
            margin: 2rem 0;
            background: rgba(94, 234, 212, 0.1);
            border-radius: 0.5rem;
            font-style: italic;
          }
          
          .article-content blockquote p {
            margin-bottom: 0.5rem;
            font-size: 1.25rem;
            color: #5EEAD4;
          }
          
          .article-content cite {
            font-size: 0.9rem;
            color: #EAEAEA;
            font-style: normal;
          }
          
          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
          }
          
          .benefit-item {
            background: rgba(94, 234, 212, 0.1);
            padding: 1.5rem;
            border-radius: 0.75rem;
            border: 1px solid rgba(94, 234, 212, 0.2);
          }
          
          .article-content .conclusion {
            font-size: 1.25rem;
            font-weight: 500;
            color: #5EEAD4;
            background: rgba(94, 234, 212, 0.1);
            padding: 1.5rem;
            border-radius: 0.75rem;
            border-left: 4px solid #5EEAD4;
            margin-top: 2rem;
          }
          
          @media (max-width: 768px) {
            .article-content h2 {
              font-size: 1.5rem;
            }
            
            .article-content h3 {
              font-size: 1.25rem;
            }
            
            .article-content p, .article-content li {
              font-size: 1rem;
            }
            
            .benefits-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BlogPost;
