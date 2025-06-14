
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
    },
    '4': {
      title: 'Blood Donation in Rural India: Bridging the Healthcare Gap',
      author: 'Dr. Priya Sharma',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'Indian Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Exploring the challenges and solutions for blood donation in rural areas of India, with focus on mobile blood collection units.',
      content: `
        <p class="lead-paragraph">Rural India faces unique challenges in healthcare access, and blood donation is no exception. With over 65% of India's population living in rural areas, bridging the gap between blood supply and demand requires innovative solutions and dedicated efforts from healthcare providers and communities alike.</p>

        <h2>The Rural Healthcare Challenge</h2>
        <p>Rural areas in India face multiple healthcare challenges that directly impact blood donation and availability:</p>
        
        <ul>
          <li><strong>Geographic isolation:</strong> Many villages are located far from medical facilities</li>
          <li><strong>Limited infrastructure:</strong> Poor roads and transportation networks</li>
          <li><strong>Lack of awareness:</strong> Limited education about the importance of blood donation</li>
          <li><strong>Superstitions and myths:</strong> Cultural barriers that prevent donation</li>
          <li><strong>Seasonal migration:</strong> Agricultural workers moving for employment</li>
        </ul>

        <h2>Mobile Blood Collection Units: A Game Changer</h2>
        <p>Mobile blood collection units have emerged as a revolutionary solution to bring blood donation services directly to rural communities. These specially equipped vehicles travel to remote villages, making donation accessible to people who would otherwise never have the opportunity to donate.</p>

        <h3>Features of Mobile Units</h3>
        <ul>
          <li><strong>Self-contained facilities:</strong> Complete with beds, refrigeration, and testing equipment</li>
          <li><strong>Trained medical staff:</strong> Qualified technicians and nurses</li>
          <li><strong>Educational materials:</strong> Brochures and videos in local languages</li>
          <li><strong>Emergency supplies:</strong> First aid and emergency medical equipment</li>
        </ul>

        <blockquote>
          <p>"Mobile blood collection units have transformed our ability to reach rural communities. What once took a day-long journey for villagers now comes to their doorstep."</p>
          <cite>— Dr. Priya Sharma, Rural Health Specialist</cite>
        </blockquote>

        <h2>Community Engagement Strategies</h2>
        <p>Successful blood donation drives in rural areas require deep community engagement and understanding of local customs:</p>

        <h3>Working with Local Leaders</h3>
        <p>Village heads, religious leaders, and respected community members play crucial roles in encouraging participation and dispelling myths about blood donation.</p>

        <h3>Cultural Sensitivity</h3>
        <p>Understanding local customs, festivals, and beliefs helps in planning donation drives that align with community values and schedules.</p>

        <h3>Education Programs</h3>
        <p>Regular awareness campaigns using local languages and culturally appropriate messaging help build trust and understanding.</p>

        <h2>Success Stories from the Field</h2>
        <p>Several rural blood donation initiatives have shown remarkable success:</p>

        <div class="benefits-grid">
          <div class="benefit-item">
            <h4>The Rajasthan Model</h4>
            <p>Desert state's mobile units have collected over 50,000 units annually from remote villages.</p>
          </div>
          <div class="benefit-item">
            <h4>Kerala's Community Approach</h4>
            <p>Village-level blood donation societies have created sustainable donation networks.</p>
          </div>
          <div class="benefit-item">
            <h4>Assam's Tea Garden Program</h4>
            <p>Tea estate workers have become regular donors, supporting regional blood banks.</p>
          </div>
        </div>

        <h2>Technology Integration</h2>
        <p>Modern technology is helping bridge the rural-urban divide in blood donation:</p>

        <h3>Digital Registration</h3>
        <p>Tablet-based registration systems allow for quick data collection and donor tracking, even in areas with limited connectivity.</p>

        <h3>GPS Tracking</h3>
        <p>Mobile units use GPS to optimize routes and ensure regular coverage of rural areas.</p>

        <h3>Cold Chain Management</h3>
        <p>Advanced refrigeration systems maintain blood quality during transport from remote locations to blood banks.</p>

        <h2>Challenges and Solutions</h2>
        <p>Despite progress, several challenges remain in rural blood donation:</p>

        <h3>Seasonal Variations</h3>
        <p><strong>Challenge:</strong> Agricultural seasons affect donor availability</p>
        <p><strong>Solution:</strong> Flexible scheduling and advance planning around crop cycles</p>

        <h3>Infrastructure Limitations</h3>
        <p><strong>Challenge:</strong> Poor roads and unreliable power supply</p>
        <p><strong>Solution:</strong> Self-sufficient mobile units with backup power systems</p>

        <h3>Cultural Barriers</h3>
        <p><strong>Challenge:</strong> Myths and misconceptions about blood donation</p>
        <p><strong>Solution:</strong> Continuous education and involvement of respected community leaders</p>

        <h2>The Impact of Rural Blood Donation</h2>
        <p>Rural blood donation programs have made significant impacts:</p>
        <ul>
          <li><strong>Increased blood availability:</strong> Rural contributions now account for 30% of India's blood supply</li>
          <li><strong>Community health awareness:</strong> Donation drives have improved overall health consciousness</li>
          <li><strong>Economic benefits:</strong> Reduced medical tourism to urban areas</li>
          <li><strong>Social cohesion:</strong> Donation drives have strengthened community bonds</li>
        </ul>

        <h2>Future Directions</h2>
        <p>The future of rural blood donation in India looks promising with several innovations on the horizon:</p>
        <ul>
          <li><strong>Drone delivery systems:</strong> For emergency blood transport</li>
          <li><strong>AI-powered planning:</strong> Optimizing collection routes and schedules</li>
          <li><strong>Community blood banks:</strong> Establishing local storage facilities</li>
          <li><strong>Integration with telemedicine:</strong> Combining blood donation with general health checkups</li>
        </ul>

        <p>Rural India's contribution to blood donation is growing steadily, thanks to innovative approaches and dedicated healthcare workers. By addressing unique rural challenges through mobile units, community engagement, and technology integration, we're building a more equitable healthcare system.</p>

        <p class="conclusion">The journey to bridge the healthcare gap in rural India through blood donation continues. Every mobile unit that reaches a remote village, every donor who overcomes their fears, and every life saved represents progress toward a healthier, more connected India.</p>
      `
    },
    '5': {
      title: '5 Simple Health Tips to Prepare for Your Next Blood Donation',
      author: 'Health Expert',
      date: '2023-12-15',
      readTime: '5 min read',
      category: 'Health Tips',
      image: 'https://images.unsplash.com/photo-1532938314630-e9439f347c43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Maximize the impact of your donation by following these easy health tips to ensure you are in top shape.',
      content: `
        <p class="lead-paragraph">Preparing for blood donation doesn't have to be complicated. By following these five simple health tips, you can ensure that your donation experience is smooth, safe, and beneficial for both you and the recipient. Proper preparation helps maximize the quality of your donation while keeping you healthy and comfortable throughout the process.</p>

        <h2>1. Stay Hydrated: The Foundation of Good Donation</h2>
        <p>Proper hydration is crucial for a successful blood donation. Water makes up about 55% of your blood, so maintaining good hydration levels ensures optimal blood flow and easier donation.</p>
        
        <h3>Before Donation</h3>
        <ul>
          <li>Drink at least 16 ounces (2 glasses) of water 2 hours before your appointment</li>
          <li>Continue sipping water throughout the day leading up to your donation</li>
          <li>Avoid alcohol for 24 hours before donating</li>
          <li>Limit caffeine intake as it can cause dehydration</li>
        </ul>

        <h3>After Donation</h3>
        <ul>
          <li>Drink an extra 16-24 ounces of water immediately after donating</li>
          <li>Continue increased water intake for the next 24-48 hours</li>
          <li>Monitor your urine color - it should be light yellow</li>
        </ul>

        <blockquote>
          <p>"Proper hydration is like giving your circulatory system the best possible conditions to work with. It makes the entire donation process smoother and safer."</p>
          <cite>— Health Expert, Donation Preparation Specialist</cite>
        </blockquote>

        <h2>2. Eat Iron-Rich Foods: Boost Your Hemoglobin</h2>
        <p>Iron is essential for healthy red blood cells and adequate hemoglobin levels. Low hemoglobin can disqualify you from donating, so maintaining good iron levels is crucial.</p>

        <h3>Best Iron-Rich Foods</h3>
        <div class="benefits-grid">
          <div class="benefit-item">
            <h4>Red Meat</h4>
            <p>Beef, lamb, and liver are excellent sources of heme iron, which is easily absorbed by the body.</p>
          </div>
          <div class="benefit-item">
            <h4>Leafy Greens</h4>
            <p>Spinach, kale, and Swiss chard provide non-heme iron plus vitamin C for better absorption.</p>
          </div>
          <div class="benefit-item">
            <h4>Legumes</h4>
            <p>Beans, lentils, and chickpeas are great plant-based sources of iron.</p>
          </div>
        </div>

        <h3>Iron Absorption Tips</h3>
        <ul>
          <li>Combine iron-rich foods with vitamin C sources (citrus fruits, tomatoes, bell peppers)</li>
          <li>Cook in cast-iron cookware to increase iron content</li>
          <li>Avoid tea and coffee with iron-rich meals as they can inhibit absorption</li>
          <li>Consider iron supplements if recommended by your healthcare provider</li>
        </ul>

        <h2>3. Get Quality Sleep: Rest for Recovery</h2>
        <p>Adequate sleep is essential for your body's ability to handle blood donation and recover effectively. Poor sleep can affect your blood pressure, heart rate, and overall well-being.</p>

        <h3>Sleep Recommendations</h3>
        <ul>
          <li>Aim for 7-9 hours of sleep the night before donation</li>
          <li>Maintain a consistent sleep schedule in the week leading up to donation</li>
          <li>Avoid late-night activities or screen time before bed</li>
          <li>Create a relaxing bedtime routine to improve sleep quality</li>
        </ul>

        <h3>Benefits of Good Sleep</h3>
        <ul>
          <li><strong>Stable vital signs:</strong> Better blood pressure and heart rate regulation</li>
          <li><strong>Improved immune function:</strong> Helps your body handle the minor stress of donation</li>
          <li><strong>Better mood:</strong> Reduces anxiety about the donation process</li>
          <li><strong>Faster recovery:</strong> Well-rested bodies recover more quickly</li>
        </ul>

        <h2>4. Eat a Healthy Meal: Fuel Your Body</h2>
        <p>Never donate blood on an empty stomach. A nutritious meal before donation helps maintain your blood sugar levels and provides the energy your body needs.</p>

        <h3>Ideal Pre-Donation Meal</h3>
        <ul>
          <li><strong>Timing:</strong> Eat a substantial meal 2-3 hours before donation</li>
          <li><strong>Complex carbohydrates:</strong> Whole grains, oats, or brown rice for sustained energy</li>
          <li><strong>Lean protein:</strong> Chicken, fish, eggs, or plant-based proteins</li>
          <li><strong>Healthy fats:</strong> Avocado, nuts, or olive oil in moderation</li>
          <li><strong>Fruits and vegetables:</strong> For vitamins and minerals</li>
        </ul>

        <h3>Foods to Avoid</h3>
        <ul>
          <li>High-fat or greasy foods that can affect blood tests</li>
          <li>Excessive sugar that can cause blood sugar spikes and crashes</li>
          <li>Alcohol, which can lead to dehydration</li>
          <li>Very spicy foods that might upset your stomach</li>
        </ul>

        <h2>5. Manage Stress and Stay Relaxed</h2>
        <p>Mental preparation is just as important as physical preparation. Stress and anxiety can affect your blood pressure and make the donation experience less pleasant.</p>

        <h3>Stress Reduction Techniques</h3>
        <ul>
          <li><strong>Deep breathing exercises:</strong> Practice slow, deep breaths to calm your nervous system</li>
          <li><strong>Meditation or mindfulness:</strong> Even 5-10 minutes can help reduce anxiety</li>
          <li><strong>Light exercise:</strong> A gentle walk can help release tension</li>
          <li><strong>Positive visualization:</strong> Imagine the lives you'll help save through your donation</li>
        </ul>

        <h3>Day-of-Donation Tips</h3>
        <ul>
          <li>Arrive early to avoid feeling rushed</li>
          <li>Bring a book, music, or podcast to distract yourself during donation</li>
          <li>Communicate with the staff about any concerns or previous experiences</li>
          <li>Focus on the positive impact of your donation</li>
        </ul>

        <h2>Post-Donation Care</h2>
        <p>Your preparation doesn't end when the donation is complete. Proper post-donation care ensures optimal recovery:</p>
        <ul>
          <li>Rest for at least 10-15 minutes before leaving the donation center</li>
          <li>Eat the provided snacks to help restore blood sugar levels</li>
          <li>Avoid strenuous exercise for 24 hours</li>
          <li>Keep the bandage on for at least 4 hours</li>
          <li>Monitor how you feel and contact the center if you have concerns</li>
        </ul>

        <p>Following these five simple health tips will help ensure that your blood donation experience is positive, safe, and impactful. Remember, your preparation not only benefits you but also ensures that your donation is of the highest quality for the patient who will receive it.</p>

        <p class="conclusion">By taking care of your body before donating blood, you're taking an active role in saving lives. These simple steps can make the difference between a good donation experience and a great one, while maximizing the benefit to those who need it most.</p>
      `
    },
    '6': {
      title: 'AIIMS Guwahati: Leading Blood Banking Innovation in Northeast India',
      author: 'Dr. Rajesh Kumar',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Regional Updates',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      excerpt: 'How AIIMS Guwahati is revolutionizing blood banking services and setting new standards for healthcare in the region.',
      content: `
        <p class="lead-paragraph">The All Institute of Medical Sciences (AIIMS) Guwahati has emerged as a beacon of hope and innovation in Northeast India's healthcare landscape. Since its establishment, the institution has been at the forefront of revolutionizing blood banking services, introducing cutting-edge technologies and establishing new standards of care that benefit millions across the region.</p>

        <h2>A Regional Healthcare Hub</h2>
        <p>AIIMS Guwahati serves as the primary referral center for the entire Northeast region, covering eight states with a combined population of over 45 million people. This vast coverage area presents unique challenges that have driven innovation in blood banking and transfusion medicine.</p>

        <h3>Coverage Area</h3>
        <ul>
          <li><strong>Assam:</strong> Primary location with direct services</li>
          <li><strong>Arunachal Pradesh:</strong> Remote area support and training</li>
          <li><strong>Manipur:</strong> Emergency blood supply and technical assistance</li>
          <li><strong>Meghalaya:</strong> Collaborative programs and quality control</li>
          <li><strong>Mizoram:</strong> Specialized transfusion services</li>
          <li><strong>Nagaland:</strong> Mobile unit coordination</li>
          <li><strong>Tripura:</strong> Blood component preparation training</li>
          <li><strong>Sikkim:</strong> High-altitude specific protocols</li>
        </ul>

        <h2>Innovative Blood Banking Technologies</h2>
        <p>AIIMS Guwahati has invested heavily in state-of-the-art blood banking equipment and technologies that set new standards for the region:</p>

        <h3>Automated Blood Processing</h3>
        <p>The institution has implemented fully automated blood component separation systems that ensure consistent quality and reduce human error. These systems can process multiple units simultaneously, significantly increasing efficiency.</p>

        <h3>Advanced Testing Protocols</h3>
        <p>All donated blood undergoes comprehensive testing using the latest molecular diagnostic techniques, including:</p>
        <ul>
          <li>Nucleic Acid Testing (NAT) for HIV, HBV, and HCV</li>
          <li>Advanced immunohematology for complex antibody identification</li>
          <li>Automated bacterial detection systems</li>
          <li>Molecular blood group genotyping</li>
        </ul>

        <blockquote>
          <p>"Our goal is not just to provide safe blood, but to set new benchmarks for quality that other institutions in the region can aspire to achieve."</p>
          <cite>— Dr. Rajesh Kumar, Head of Transfusion Medicine, AIIMS Guwahati</cite>
        </blockquote>

        <h2>Digital Innovation and Connectivity</h2>
        <p>AIIMS Guwahati has pioneered digital solutions that connect blood banks across the Northeast, creating an integrated network for better resource management.</p>

        <h3>Blood Bank Information System (BBIS)</h3>
        <p>A comprehensive digital platform that tracks:</p>
        <ul>
          <li>Real-time inventory levels across connected centers</li>
          <li>Donor records and eligibility status</li>
          <li>Blood component usage patterns</li>
          <li>Quality control data and compliance monitoring</li>
        </ul>

        <h3>Telemedicine Integration</h3>
        <p>The blood bank has integrated with AIIMS Guwahati's telemedicine network, allowing remote consultation for complex transfusion cases and providing expert guidance to smaller hospitals across the region.</p>

        <h2>Training and Capacity Building</h2>
        <p>One of AIIMS Guwahati's most significant contributions has been its comprehensive training programs for healthcare workers across the Northeast.</p>

        <div class="benefits-grid">
          <div class="benefit-item">
            <h4>Certificate Courses</h4>
            <p>Specialized training in blood banking technology and transfusion medicine for technicians and nurses.</p>
          </div>
          <div class="benefit-item">
            <h4>Fellowship Programs</h4>
            <p>Advanced training for doctors in transfusion medicine and immunohematology.</p>
          </div>
          <div class="benefit-item">
            <h4>Continuing Education</h4>
            <p>Regular workshops and seminars to update healthcare workers on latest protocols and technologies.</p>
          </div>
        </div>

        <h2>Community Outreach Programs</h2>
        <p>AIIMS Guwahati has developed extensive community outreach programs to increase blood donation awareness and participation across the Northeast.</p>

        <h3>Mobile Blood Collection Units</h3>
        <p>The institution operates a fleet of state-of-the-art mobile units that reach remote villages and organize collection drives in schools, colleges, and community centers.</p>

        <h3>Voluntary Blood Donor Clubs</h3>
        <p>AIIMS has established donor clubs in various institutions and organizations, creating a network of regular, committed donors who can be contacted during emergencies.</p>

        <h3>Awareness Campaigns</h3>
        <p>Regular campaigns using local languages and culturally appropriate messaging help dispel myths and encourage participation in blood donation.</p>

        <h2>Research and Development</h2>
        <p>The institution is actively involved in research that addresses regional health challenges and contributes to global knowledge in transfusion medicine.</p>

        <h3>Current Research Areas</h3>
        <ul>
          <li><strong>Thalassemia prevalence:</strong> Studying genetic patterns in Northeast populations</li>
          <li><strong>Rare blood groups:</strong> Mapping distribution of uncommon blood types</li>
          <li><strong>Transfusion-transmitted infections:</strong> Developing region-specific screening protocols</li>
          <li><strong>Component therapy optimization:</strong> Improving outcomes through better component usage</li>
        </ul>

        <h2>Emergency Response Capabilities</h2>
        <p>AIIMS Guwahati has developed robust emergency response protocols to handle disasters and mass casualty events common in the region.</p>

        <h3>Disaster Preparedness</h3>
        <ul>
          <li>Emergency blood reserve maintenance</li>
          <li>Rapid response team deployment</li>
          <li>Coordination with military and civilian authorities</li>
          <li>Mobile unit activation protocols</li>
        </ul>

        <h3>Regional Coordination</h3>
        <p>The institution serves as the coordination center for emergency blood supply across the Northeast, maintaining communication networks with all major hospitals and blood banks in the region.</p>

        <h2>Quality Assurance and Accreditation</h2>
        <p>AIIMS Guwahati maintains the highest standards of quality in blood banking operations through:</p>
        <ul>
          <li>NABH (National Accreditation Board for Hospitals) accreditation</li>
          <li>Regular external quality assessment program participation</li>
          <li>Internal quality control systems</li>
          <li>Compliance with national and international guidelines</li>
        </ul>

        <h2>Future Vision and Expansion Plans</h2>
        <p>AIIMS Guwahati continues to expand its capabilities and vision for the future includes:</p>
        <ul>
          <li><strong>Stem cell banking:</strong> Establishing a regional stem cell registry and bank</li>
          <li><strong>Precision medicine:</strong> Implementing pharmacogenomics in transfusion therapy</li>
          <li><strong>Artificial intelligence:</strong> Using AI for inventory management and compatibility testing</li>
          <li><strong>Drone delivery:</strong> Testing unmanned delivery systems for emergency blood transport</li>
        </ul>

        <p>AIIMS Guwahati's commitment to innovation and excellence in blood banking has transformed healthcare delivery across Northeast India. Through advanced technology, comprehensive training, and community engagement, the institution continues to save lives and set new standards for medical care in the region.</p>

        <p class="conclusion">As AIIMS Guwahati continues to grow and innovate, it remains dedicated to its mission of providing world-class healthcare to the people of Northeast India. Every technological advancement, every trained healthcare worker, and every saved life represents progress toward a healthier, more resilient region.</p>
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

```
