
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowLeft, Heart, Share2, Clock, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog data - in real app, this would come from a database
  const blogPosts = {
    '1': {
      id: 1,
      title: 'The Science Behind Blood Types: What Every Donor Should Know',
      content: `
        <div class="article-content">
          <p class="lead-paragraph">Blood donation is one of the most critical medical procedures that saves millions of lives annually. Understanding the science behind blood types is essential for both donors and recipients to ensure safe and effective transfusions.</p>
          
          <h2>Understanding the ABO System</h2>
          <p>The ABO blood group system, discovered by Karl Landsteiner in 1901, classifies human blood into four main types: A, B, AB, and O. This classification is based on the presence or absence of specific antigens on the surface of red blood cells.</p>
          
          <div class="info-box">
            <h4>Did You Know?</h4>
            <p>Karl Landsteiner won the Nobel Prize in Physiology or Medicine in 1930 for his discovery of human blood groups.</p>
          </div>
          
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
          
          <div class="stats-grid">
            <div class="stat-item">
              <h4>45%</h4>
              <p>Population with O+ blood type</p>
            </div>
            <div class="stat-item">
              <h4>6.6%</h4>
              <p>Population with O- blood type</p>
            </div>
            <div class="stat-item">
              <h4>40.5%</h4>
              <p>Population with A blood type</p>
            </div>
            <div class="stat-item">
              <h4>10.9%</h4>
              <p>Population with B blood type</p>
            </div>
          </div>
          
          <h2>Why Blood Type Matters</h2>
          <p>Incompatible blood transfusions can trigger severe immune reactions, including:</p>
          <ul class="enhanced-list">
            <li>Hemolytic transfusion reactions</li>
            <li>Acute kidney failure</li>
            <li>Shock and potentially death</li>
            <li>Fever and chills</li>
            <li>Difficulty breathing</li>
          </ul>
          
          <h2>The Donation Process</h2>
          <p>Modern blood donation is a carefully controlled process that ensures both donor safety and blood quality. The entire process typically takes 45-60 minutes, with the actual blood collection lasting only 8-12 minutes.</p>
          
          <h3>Pre-Donation Screening</h3>
          <p>Every donor undergoes thorough screening including:</p>
          <ul class="enhanced-list">
            <li>Medical history questionnaire</li>
            <li>Mini-physical examination</li>
            <li>Hemoglobin level testing</li>
            <li>Blood pressure and pulse check</li>
            <li>Temperature measurement</li>
          </ul>
          
          <div class="quote-box">
            <blockquote>
              "Every blood donation can save up to three lives. It's one of the most powerful ways an individual can make a direct impact on their community."
            </blockquote>
            <cite>Dr. Sarah Mitchell, Hematologist</cite>
          </div>
          
          <h2>Recent Advances in Blood Science</h2>
          <p>Recent research has led to exciting developments in blood science, including artificial blood substitutes, improved storage methods, and better compatibility testing techniques.</p>
          
          <h3>Artificial Blood</h3>
          <p>Scientists are developing artificial blood substitutes that could potentially address blood shortages. These products, while not yet ready for widespread use, show promise for emergency situations.</p>
          
          <h3>Pathogen Reduction Technology</h3>
          <p>New technologies are being implemented to reduce the risk of pathogen transmission through blood transfusions, making the blood supply even safer.</p>
          
          <h2>Conclusion</h2>
          <p>Understanding blood types and the science behind blood donation helps create more informed donors and contributes to a safer, more efficient blood supply system. Every donation matters, and with proper knowledge, we can continue to save lives through this remarkable medical procedure.</p>
        </div>
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
        <div class="article-content">
          <p class="lead-paragraph">Behind every pint of donated blood lies a story of compassion, courage, and community spirit. Today, we share inspiring stories from our donor community that showcase the profound impact of blood donation.</p>
          
          <h2>Maria's Story: A Mother's Gift</h2>
          <p>Maria Rodriguez began donating blood after her daughter was born prematurely and required multiple transfusions. "I realized that someone else's donation saved my daughter's life," Maria recalls. "I wanted to give that same gift to other families."</p>
          
          <div class="story-highlight">
            <h4>Impact Numbers</h4>
            <p>Over the past five years, Maria has donated 24 times, potentially helping up to 72 people. Her dedication earned her our Gold Donor status.</p>
          </div>
          
          <h2>The Emergency That Changed Everything</h2>
          <p>John Thompson was a regular donor until a car accident changed his perspective entirely. "I was the one receiving blood instead of giving it," John remembers. "Twenty-three units of blood products saved my life that night."</p>
          
          <p>After his recovery, John became not just a donor but an advocate, organizing workplace blood drives that have collected over 500 units in the past two years.</p>
          
          <h2>Breaking Barriers: Diverse Donors Matter</h2>
          <p>Our community represents the beautiful diversity of our city. From college students to retirees, from tech workers to teachers, every donor brings something special to our mission.</p>
          
          <h3>Student Success</h3>
          <p>Local university students have formed the "Life Savers Club," organizing monthly donation events that have become some of our most successful drives. Their energy and commitment inspire donors of all ages.</p>
          
          <div class="stats-grid">
            <div class="stat-item">
              <h4>500+</h4>
              <p>Student donors this year</p>
            </div>
            <div class="stat-item">
              <h4>24</h4>
              <p>Monthly drives organized</p>
            </div>
            <div class="stat-item">
              <h4>95%</h4>
              <p>Return rate for student donors</p>
            </div>
          </div>
          
          <h2>The Ripple Effect</h2>
          <p>One donation can help multiple patients. Red blood cells can be given to trauma victims, platelets support cancer patients undergoing chemotherapy, and plasma helps burn victims and those with immune disorders.</p>
          
          <h3>By the Numbers</h3>
          <ul class="enhanced-list">
            <li>1 donation can save up to 3 lives</li>
            <li>Every 2 seconds, someone needs blood</li>
            <li>Only 3% of eligible donors actually donate</li>
            <li>The average red blood cell transfusion is 3 units</li>
            <li>Platelets must be used within 5 days of donation</li>
          </ul>
          
          <div class="quote-box">
            <blockquote>
              "Being a blood donor isn't just about giving blood – it's about being part of a community that cares, that shows up when others need help most."
            </blockquote>
            <cite>Maria Rodriguez, Gold Donor</cite>
          </div>
          
          <h2>Overcoming Fear and Myths</h2>
          <p>Many potential donors hesitate due to misconceptions about the donation process. Our experienced staff and comfortable facilities make donation as easy and pleasant as possible.</p>
          
          <h3>Common Concerns Addressed</h3>
          <div class="faq-section">
            <div class="faq-item">
              <h4>Pain Concerns</h4>
              <p>Most donors report feeling only a brief pinch, similar to a routine blood test. The entire needle insertion process takes less than a minute.</p>
            </div>
            <div class="faq-item">
              <h4>Time Investment</h4>
              <p>The entire process takes about an hour, with actual donation lasting 8-12 minutes. Most of the time is spent on registration and post-donation refreshments.</p>
            </div>
            <div class="faq-item">
              <h4>Health Impact</h4>
              <p>Healthy adults can safely donate every 56 days with no adverse effects. Your body replaces the donated blood within 24-48 hours.</p>
            </div>
          </div>
          
          <h2>Special Recognition</h2>
          <p>We're proud to recognize our milestone donors who have made extraordinary commitments to saving lives:</p>
          <ul class="enhanced-list">
            <li><strong>Platinum Donors (50+ donations):</strong> 47 heroes</li>
            <li><strong>Diamond Donors (100+ donations):</strong> 12 legends</li>
            <li><strong>Lifetime Achievement (200+ donations):</strong> 3 true champions</li>
          </ul>
          
          <h2>Join Our Community</h2>
          <p>Every new donor strengthens our community's ability to respond to emergencies and support ongoing medical needs. Whether you're giving for the first time or the fiftieth, you're part of something bigger than yourself.</p>
          
          <h3>How to Get Started</h3>
          <p>Joining our donor community is simple. Schedule an appointment online, visit one of our convenient locations, or attend a mobile drive in your neighborhood. Our friendly staff will guide you through every step.</p>
          
          <h2>Looking Forward</h2>
          <p>As our community grows, so does our impact. With new technologies, improved processes, and an expanding network of donors, we're better equipped than ever to meet the blood needs of our region.</p>
          
          <p class="closing-statement">Your story could be next. Every donation matters, every donor is a hero, and together, we're saving lives one pint at a time.</p>
        </div>
      `,
      excerpt: 'Read inspiring stories from our donor community and discover how everyday heroes are making a life-saving difference.',
      author: 'Community Team',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Community Stories',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Community', 'Donor Stories', 'Heroes', 'Impact']
    },
    '3': {
      id: 3,
      title: 'The Importance of Regular Blood Donation: A Guide for New Donors',
      content: `
        <div class="article-content">
          <p class="lead-paragraph">Regular blood donation is the cornerstone of a stable blood supply system. For new donors, understanding the importance of consistent donation and the process involved can help build confidence and commitment to this life-saving practice.</p>
          
          <h2>Why Regular Donation Matters</h2>
          <p>Blood has a limited shelf life, making regular donations essential for maintaining adequate supplies. Red blood cells can be stored for up to 42 days, platelets for only 5 days, and plasma for up to one year when frozen.</p>
          
          <div class="info-box">
            <h4>Supply Chain Reality</h4>
            <p>Hospitals need a consistent supply of all blood types every day. Seasonal fluctuations, holidays, and emergencies can quickly deplete blood banks without regular donors.</p>
          </div>
          
          <h2>The Journey of a First-Time Donor</h2>
          <p>Your first donation experience sets the foundation for your donor journey. Here's what you can expect:</p>
          
          <h3>Pre-Donation Preparation</h3>
          <ul class="enhanced-list">
            <li>Get plenty of sleep the night before</li>
            <li>Eat a healthy meal within 4 hours of donation</li>
            <li>Drink plenty of water and avoid alcohol</li>
            <li>Bring a valid ID and donor card (if you have one)</li>
            <li>Wear comfortable clothing with sleeves that can be rolled up</li>
          </ul>
          
          <h3>The Donation Process Step-by-Step</h3>
          <div class="process-steps">
            <div class="step">
              <h4>Step 1: Registration (5-10 minutes)</h4>
              <p>Complete donor information forms and provide identification.</p>
            </div>
            <div class="step">
              <h4>Step 2: Health Screening (10-15 minutes)</h4>
              <p>Mini-physical including temperature, blood pressure, pulse, and hemoglobin check.</p>
            </div>
            <div class="step">
              <h4>Step 3: Donation (8-12 minutes)</h4>
              <p>The actual blood collection process in a comfortable, supervised environment.</p>
            </div>
            <div class="step">
              <h4>Step 4: Recovery (10-15 minutes)</h4>
              <p>Rest and enjoy refreshments while your body begins to recover.</p>
            </div>
          </div>
          
          <h2>Building a Donation Schedule</h2>
          <p>Regular donors typically donate every 8-12 weeks, allowing their bodies to fully recover between donations. Many donors find it helpful to:</p>
          
          <ul class="enhanced-list">
            <li>Schedule their next appointment before leaving</li>
            <li>Set calendar reminders for donation eligibility</li>
            <li>Join donor loyalty programs for rewards and recognition</li>
            <li>Track their donation history and impact</li>
          </ul>
          
          <div class="stats-grid">
            <div class="stat-item">
              <h4>56 days</h4>
              <p>Minimum time between whole blood donations</p>
            </div>
            <div class="stat-item">
              <h4>6 times</h4>
              <p>Maximum donations per year for whole blood</p>
            </div>
            <div class="stat-item">
              <h4>450ml</h4>
              <p>Average amount of blood donated</p>
            </div>
          </div>
          
          <h2>Health Benefits for Donors</h2>
          <p>Regular blood donation offers several health benefits for donors:</p>
          
          <h3>Free Health Screening</h3>
          <p>Each donation includes a mini-physical that can help detect potential health issues early. Your blood is also tested for various diseases and conditions.</p>
          
          <h3>Cardiovascular Benefits</h3>
          <p>Some studies suggest that regular blood donation may help maintain healthy iron levels and potentially reduce the risk of heart disease.</p>
          
          <h3>Sense of Purpose</h3>
          <p>Knowing that your donation directly helps save lives provides psychological benefits and a sense of community contribution.</p>
          
          <div class="quote-box">
            <blockquote>
              "Regular donation isn't just good for recipients – it's good for donors too. The health screening alone has helped many donors catch health issues early."
            </blockquote>
            <cite>Dr. Michael Chen, Donation Center Medical Director</cite>
          </div>
          
          <h2>Common Concerns for New Donors</h2>
          
          <h3>Eligibility Requirements</h3>
          <p>Most healthy adults between 18-65 years old can donate blood. Specific requirements include:</p>
          <ul class="enhanced-list">
            <li>Minimum weight of 110 pounds</li>
            <li>No recent tattoos or piercings (timing varies by location)</li>
            <li>No recent travel to certain countries</li>
            <li>No current medications that prevent donation</li>
            <li>Good general health</li>
          </ul>
          
          <h3>Side Effects and Recovery</h3>
          <p>Most donors experience no side effects. Occasionally, donors may experience:</p>
          <ul class="enhanced-list">
            <li>Mild bruising at the needle site</li>
            <li>Temporary lightheadedness</li>
            <li>Fatigue for a few hours post-donation</li>
          </ul>
          
          <h2>Making Donation a Habit</h2>
          <p>Successful regular donors often develop routines that make donation feel natural:</p>
          
          <div class="habit-tips">
            <div class="tip">
              <h4>Schedule Consistency</h4>
              <p>Many donors choose the same day of the week or month for their donations.</p>
            </div>
            <div class="tip">
              <h4>Bring a Friend</h4>
              <p>Donating with friends or family members makes the experience more enjoyable.</p>
            </div>
            <div class="tip">
              <h4>Track Your Impact</h4>
              <p>Keep track of how many lives you've potentially saved through your donations.</p>
            </div>
          </div>
          
          <h2>Your Impact as a Regular Donor</h2>
          <p>A donor who gives blood every 8 weeks for 10 years can potentially save over 100 lives. This incredible impact is multiplied when donors encourage friends and family to join them.</p>
          
          <h3>Community Impact</h3>
          <p>Regular donors form the backbone of community blood supply, ensuring that:</p>
          <ul class="enhanced-list">
            <li>Emergency rooms have blood available for trauma patients</li>
            <li>Cancer patients can receive necessary transfusions during treatment</li>
            <li>Surgical procedures can proceed without delay</li>
            <li>Mothers experiencing childbirth complications receive immediate care</li>
          </ul>
          
          <h2>Next Steps for New Donors</h2>
          <p>Ready to become a regular donor? Here's how to get started:</p>
          
          <ol class="enhanced-list">
            <li>Find your nearest donation center or mobile drive</li>
            <li>Schedule your first appointment online or by phone</li>
            <li>Prepare for your donation following our guidelines</li>
            <li>Complete your first donation</li>
            <li>Schedule your next donation before leaving</li>
            <li>Join our donor community and start saving lives</li>
          </ol>
          
          <p class="closing-statement">Every new donor who commits to regular donation strengthens our community's ability to save lives. Your consistent participation makes you not just a donor, but a true community hero.</p>
        </div>
      `,
      excerpt: 'Learn why regular blood donation is vital for maintaining a stable blood supply and how you can become a life-saving hero.',
      author: 'Donation Advocate',
      date: '2023-12-20',
      readTime: '7 min read',
      category: 'Donation Process',
      image: 'https://images.unsplash.com/photo-1526256260728-5913961cae9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Regular Donation', 'New Donors', 'Blood Supply']
    },
    '4': {
      id: 4,
      title: '5 Simple Health Tips to Prepare for Your Next Blood Donation',
      content: `
        <div class="article-content">
          <p class="lead-paragraph">Proper preparation can make your blood donation experience smoother, safer, and more comfortable. These five simple health tips will help ensure you're in the best possible condition for your donation while maximizing the quality of your gift.</p>
          
          <h2>Tip 1: Hydrate Properly</h2>
          <p>Proper hydration is crucial for a successful donation. Your blood volume is made up of about 55% plasma, which is roughly 90% water. When you're well-hydrated, donation is easier and you'll feel better afterward.</p>
          
          <div class="tip-detail">
            <h4>Hydration Guidelines:</h4>
            <ul class="enhanced-list">
              <li>Drink 16 ounces of water 2 hours before donation</li>
              <li>Continue drinking fluids throughout the day</li>
              <li>Avoid alcohol for 24 hours before and after donation</li>
              <li>Limit caffeine on donation day</li>
              <li>Continue hydrating for 24 hours post-donation</li>
            </ul>
          </div>
          
          <h3>Signs of Proper Hydration</h3>
          <p>You'll know you're properly hydrated when your urine is pale yellow or clear, you feel alert and energetic, and your skin feels supple rather than dry.</p>
          
          <h2>Tip 2: Eat Iron-Rich Foods</h2>
          <p>Iron is essential for healthy red blood cell production. Donors with adequate iron levels not only pass the pre-donation screening more easily but also recover faster after donation.</p>
          
          <div class="iron-foods">
            <h4>Excellent Iron Sources:</h4>
            <div class="food-categories">
              <div class="category">
                <h5>Heme Iron (easily absorbed):</h5>
                <p>Red meat, poultry, fish, shellfish</p>
              </div>
              <div class="category">
                <h5>Non-Heme Iron (plant-based):</h5>
                <p>Spinach, lentils, tofu, fortified cereals, beans</p>
              </div>
              <div class="category">
                <h5>Iron Absorption Enhancers:</h5>
                <p>Vitamin C-rich foods like citrus fruits, bell peppers, strawberries</p>
              </div>
            </div>
          </div>
          
          <div class="info-box">
            <h4>Iron Absorption Tip</h4>
            <p>Pair iron-rich foods with vitamin C sources to increase absorption. For example, add bell peppers to your spinach salad or drink orange juice with your iron-fortified cereal.</p>
          </div>
          
          <h2>Tip 3: Get Quality Sleep</h2>
          <p>Adequate rest helps your body function optimally and can prevent donation-related fatigue or dizziness. Well-rested donors typically have better donation experiences.</p>
          
          <h3>Sleep Recommendations:</h3>
          <ul class="enhanced-list">
            <li>Aim for 7-9 hours of sleep the night before donation</li>
            <li>Maintain a consistent sleep schedule</li>
            <li>Avoid screens for at least 1 hour before bedtime</li>
            <li>Create a comfortable sleep environment</li>
            <li>Avoid heavy meals or caffeine close to bedtime</li>
          </ul>
          
          <div class="stats-grid">
            <div class="stat-item">
              <h4>7-9 hours</h4>
              <p>Recommended sleep for adults</p>
            </div>
            <div class="stat-item">
              <h4>23%</h4>
              <p>Reduction in donation complications with adequate sleep</p>
            </div>
            <div class="stat-item">
              <h4>1 hour</h4>
              <p>Screen-free time before bed recommended</p>
            </div>
          </div>
          
          <h2>Tip 4: Time Your Meals Right</h2>
          <p>What and when you eat before donation can significantly impact your experience. The right nutrition provides energy and helps prevent low blood sugar during and after donation.</p>
          
          <h3>Pre-Donation Meal Guidelines:</h3>
          <div class="meal-timing">
            <div class="timing-item">
              <h4>3-4 Hours Before:</h4>
              <p>Eat a substantial, balanced meal with protein, complex carbohydrates, and healthy fats.</p>
            </div>
            <div class="timing-item">
              <h4>1-2 Hours Before:</h4>
              <p>Light snack if needed - avoid heavy, fatty, or very sweet foods.</p>
            </div>
            <div class="timing-item">
              <h4>30 Minutes Before:</h4>
              <p>Stick to water or light, non-caffeinated beverages.</p>
            </div>
          </div>
          
          <h3>Ideal Pre-Donation Foods:</h3>
          <ul class="enhanced-list">
            <li>Whole grain toast with peanut butter</li>
            <li>Greek yogurt with berries and granola</li>
            <li>Oatmeal with banana and nuts</li>
            <li>Lean protein with vegetables and rice</li>
            <li>Smoothie with fruits, vegetables, and protein powder</li>
          </ul>
          
          <h3>Foods to Avoid:</h3>
          <ul class="enhanced-list">
            <li>High-fat foods (can affect blood tests)</li>
            <li>Very sugary snacks or drinks</li>
            <li>Alcoholic beverages</li>
            <li>Excessive caffeine</li>
            <li>Foods you've never tried before</li>
          </ul>
          
          <h2>Tip 5: Manage Stress and Stay Positive</h2>
          <p>Mental preparation is just as important as physical preparation. Stress and anxiety can affect your blood pressure and overall donation experience.</p>
          
          <h3>Stress Management Techniques:</h3>
          <div class="stress-techniques">
            <div class="technique">
              <h4>Deep Breathing</h4>
              <p>Practice deep, slow breathing exercises to calm your nervous system.</p>
            </div>
            <div class="technique">
              <h4>Positive Visualization</h4>
              <p>Imagine the positive impact your donation will have on someone's life.</p>
            </div>
            <div class="technique">
              <h4>Relaxation Techniques</h4>
              <p>Try progressive muscle relaxation or meditation before your appointment.</p>
            </div>
            <div class="technique">
              <h4>Bring Support</h4>
              <p>Consider bringing a friend or family member for moral support.</p>
            </div>
          </div>
          
          <div class="quote-box">
            <blockquote>
              "Donors who come prepared - both physically and mentally - not only have better experiences but often become our most committed regular donors."
            </blockquote>
            <cite>Sarah Johnson, Donor Services Coordinator</cite>
          </div>
          
          <h2>Day-of-Donation Checklist</h2>
          <p>Use this checklist to ensure you're fully prepared:</p>
          
          <div class="checklist">
            <h4>Physical Preparation:</h4>
            <ul class="enhanced-list">
              <li>✓ Had 7+ hours of sleep</li>
              <li>✓ Eaten a healthy meal within 4 hours</li>
              <li>✓ Drinking plenty of water</li>
              <li>✓ Wearing comfortable clothes with accessible sleeves</li>
              <li>✓ Have valid photo ID</li>
            </ul>
            
            <h4>Mental Preparation:</h4>
            <ul class="enhanced-list">
              <li>✓ Feeling calm and positive</li>
              <li>✓ Know what to expect during donation</li>
              <li>✓ Have support person if needed</li>
              <li>✓ Planned post-donation activities (light only)</li>
              <li>✓ Excited about helping save lives</li>
            </ul>
          </div>
          
          <h2>Post-Donation Care</h2>
          <p>Your preparation doesn't end when the donation is complete. Proper post-donation care helps ensure quick recovery:</p>
          
          <ul class="enhanced-list">
            <li>Rest for at least 10-15 minutes after donation</li>
            <li>Drink plenty of fluids over the next 24 hours</li>
            <li>Eat iron-rich foods to help replenish your stores</li>
            <li>Avoid heavy lifting or strenuous exercise for 24 hours</li>
            <li>Keep your bandage on for at least 4 hours</li>
            <li>Contact the center if you have any concerns</li>
          </ul>
          
          <h2>Long-Term Health for Regular Donors</h2>
          <p>If you plan to become a regular donor, maintaining these healthy habits year-round will ensure you're always ready to donate:</p>
          
          <div class="long-term-tips">
            <div class="tip-category">
              <h4>Nutrition</h4>
              <p>Maintain a balanced diet rich in iron, vitamin C, and B vitamins.</p>
            </div>
            <div class="tip-category">
              <h4>Exercise</h4>
              <p>Regular moderate exercise improves circulation and overall health.</p>
            </div>
            <div class="tip-category">
              <h4>Health Monitoring</h4>
              <p>Regular check-ups with your healthcare provider help maintain donation eligibility.</p>
            </div>
          </div>
          
          <p class="closing-statement">By following these five simple tips, you're not just preparing for a successful donation - you're taking steps toward better overall health. Every well-prepared donation makes a difference in someone's life.</p>
        </div>
      `,
      excerpt: 'Maximize the impact of your donation by following these easy health tips to ensure you are in top shape.',
      author: 'Health Expert',
      date: '2023-12-15',
      readTime: '5 min read',
      category: 'Health Tips',
      image: 'https://images.unsplash.com/photo-1532938314630-e9439f347c43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      tags: ['Health Tips', 'Blood Donation', 'Donor Preparation']
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-20">
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
              <p className="text-xl text-dark-text/70 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-dark-text/60 mb-6">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>Article</span>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex gap-4 pt-6 border-t border-white/10">
              <Button size="sm" variant="outline" className="border-electric-cyan/20 text-electric-cyan hover:bg-electric-cyan/10">
                <Heart className="w-4 h-4 mr-2" />
                Like Article
              </Button>
              <Button size="sm" variant="outline" className="border-electric-cyan/20 text-electric-cyan hover:bg-electric-cyan/10">
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
              className="article-content prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-lg font-semibold text-soft-white mb-4">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-electric-cyan/20 text-electric-cyan hover:bg-electric-cyan/30 transition-colors"
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
            <p className="text-dark-text/70 mb-6 leading-relaxed">
              Join our community of life-savers and help us continue making an impact through blood donation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button className="bg-gradient-to-r from-neon-pink to-electric-cyan text-white px-8 py-3 hover:scale-105 transition-all duration-300">
                  Become a Donor Today
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-electric-cyan/20 text-electric-cyan px-8 py-3 hover:bg-electric-cyan/10">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .article-content {
          color: #EAEAEA;
          line-height: 1.8;
        }
        
        .article-content .lead-paragraph {
          font-size: 1.25rem;
          font-weight: 500;
          color: #F5F5F5;
          margin-bottom: 2rem;
          line-height: 1.7;
        }
        
        .article-content h2 {
          font-size: 2rem;
          font-weight: bold;
          color: #F5F5F5;
          margin: 3rem 0 1.5rem 0;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #FF1493;
        }
        
        .article-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #F5F5F5;
          margin: 2.5rem 0 1rem 0;
        }
        
        .article-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #00FFFF;
          margin: 1.5rem 0 0.75rem 0;
        }
        
        .article-content h5 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #FF1493;
          margin: 1rem 0 0.5rem 0;
        }
        
        .article-content p {
          margin-bottom: 1.5rem;
          color: #EAEAEA;
        }
        
        .article-content .enhanced-list {
          list-style: none;
          padding-left: 0;
          margin: 1.5rem 0;
        }
        
        .article-content .enhanced-list li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 0.75rem;
          color: #EAEAEA;
        }
        
        .article-content .enhanced-list li:before {
          content: "▸";
          position: absolute;
          left: 0;
          color: #FF1493;
          font-weight: bold;
        }
        
        .article-content .info-box,
        .article-content .story-highlight,
        .article-content .tip-detail {
          background: rgba(0, 255, 255, 0.1);
          border-left: 4px solid #00FFFF;
          padding: 1.5rem;
          margin: 2rem 0;
          border-radius: 0.5rem;
        }
        
        .article-content .quote-box {
          background: rgba(255, 20, 147, 0.1);
          border-left: 4px solid #FF1493;
          padding: 2rem;
          margin: 2.5rem 0;
          border-radius: 0.5rem;
          text-align: center;
        }
        
        .article-content blockquote {
          font-size: 1.25rem;
          font-style: italic;
          color: #F5F5F5;
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        
        .article-content cite {
          font-size: 0.9rem;
          color: #FF1493;
          font-weight: 600;
        }
        
        .article-content .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .article-content .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .article-content .stat-item h4 {
          font-size: 2.5rem;
          font-weight: bold;
          color: #00FFFF;
          margin-bottom: 0.5rem;
        }
        
        .article-content .stat-item p {
          font-size: 0.9rem;
          color: #EAEAEA;
          margin: 0;
        }
        
        .article-content .process-steps {
          display: grid;
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .article-content .step {
          background: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 1rem;
          border-left: 4px solid #FF1493;
        }
        
        .article-content .food-categories,
        .article-content .habit-tips,
        .article-content .stress-techniques {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin: 1.5rem 0;
        }
        
        .article-content .category,
        .article-content .tip,
        .article-content .technique {
          background: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .article-content .closing-statement {
          font-size: 1.1rem;
          font-weight: 500;
          color: #F5F5F5;
          text-align: center;
          margin-top: 3rem;
          padding: 2rem;
          background: rgba(255, 20, 147, 0.1);
          border-radius: 1rem;
          border: 1px solid rgba(255, 20, 147, 0.2);
        }
        
        .article-content .faq-section,
        .article-content .meal-timing,
        .article-content .checklist,
        .article-content .long-term-tips {
          margin: 2rem 0;
        }
        
        .article-content .faq-item,
        .article-content .timing-item,
        .article-content .tip-category {
          background: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          margin-bottom: 1rem;
          border-radius: 0.5rem;
          border-left: 3px solid #00FFFF;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
