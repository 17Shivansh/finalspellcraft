import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
    {
        id: 1,
        name: "Alice Johnson",
        rating: 5,
        comment: "Excellent service! Highly recommend SkillShareIndia. The team was professional and attentive to our needs, ensuring we received the best support possible. The improvements in our school's performance were remarkable, and we couldn't be happier with the results.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Bob Smith",
        rating: 4,
        comment: "Great experience, very professional. SkillShareIndia provided us with the guidance we needed to improve our school's educational outcomes. Their staff was knowledgeable and always available for assistance, making the whole process seamless and efficient.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Cathy Lee",
        rating: 5,
        comment: "Helped me improve my school's performance significantly. The consultancy's expertise and strategic insights were instrumental in transforming our approach to education, leading to higher student satisfaction and better overall results.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 4,
        name: "David Brown",
        rating: 3,
        comment: "Good consultancy but could improve communication. While the strategies provided were helpful, there were times when follow-ups could have been more consistent to ensure we stayed on track with our goals.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 5,
        name: "Eva White",
        rating: 4,
        comment: "Supportive team that really cares about education. SkillShareIndia's consultants genuinely wanted to see our school succeed, and their tailored advice helped us implement necessary changes effectively.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 6,
        name: "Frank Black",
        rating: 5,
        comment: "Very knowledgeable and helpful. The team's insights on curriculum improvement and teacher training were particularly valuable, and we saw immediate positive changes in our educational offerings.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 7,
        name: "Grace Green",
        rating: 4,
        comment: "A bit expensive but worth the investment. The quality of service and depth of knowledge provided made it a worthwhile expenditure for our school. We have seen great progress since implementing their recommendations.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 8,
        name: "Henry Gold",
        rating: 3,
        comment: "Satisfactory service with room for improvement. Overall, our experience was good, but there were areas where we hoped for more detailed support and better communication throughout the process.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 9,
        name: "Isabella Blue",
        rating: 5,
        comment: "Amazing results, exceeded my expectations. Thanks to SkillShareIndia, we implemented new strategies that dramatically improved our student engagement and academic performance. The team was fantastic throughout the entire process.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 10,
        name: "Jack Red",
        rating: 4,
        comment: "Very professional staff and good outcomes. Their tailored approach made a significant impact on our school's operations and educational quality. I would definitely recommend their services to others.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 11,
        name: "Kathy Pink",
        rating: 5,
        comment: "I saw a big improvement in my school’s rankings. The actionable insights and practical recommendations provided by the SkillShareIndia team were invaluable. They guided us every step of the way.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 12,
        name: "Liam Purple",
        rating: 4,
        comment: "Good guidance and resources. The tools and materials they provided were incredibly helpful for our faculty development. The investment paid off in improved student outcomes and teacher satisfaction.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 13,
        name: "Mia Orange",
        rating: 5,
        comment: "The best consultancy for educational needs! They delivered exceptional results by providing insightful strategies and dedicated support. Our overall school culture has improved significantly since partnering with them.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 14,
        name: "Noah Grey",
        rating: 3,
        comment: "Decent service, but I expected more follow-up. While the initial consultation was productive, I felt there could have been more consistent check-ins to ensure we stayed on track.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 15,
        name: "Olivia Aqua",
        rating: 4,
        comment: "Very insightful, learned a lot. The workshops offered by SkillShareIndia were engaging and filled with practical knowledge that our staff could implement immediately in the classroom.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 16,
        name: "Paul Cyan",
        rating: 5,
        comment: "Outstanding support and advice. Their team's commitment to education shines through in their approach. They not only provided solutions but also motivated our staff to strive for excellence.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 17,
        name: "Quinn Magenta",
        rating: 4,
        comment: "Effective strategies for improvement. We implemented their recommendations and saw a noticeable boost in student performance and satisfaction, which has been great for our school's reputation.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 18,
        name: "Ryan Indigo",
        rating: 5,
        comment: "Exceptional service, truly dedicated to education. The team's expertise and personalized approach made a significant difference in our school's development. I highly recommend their services!",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 19,
        name: "Sophia Turquoise",
        rating: 4,
        comment: "Helped me achieve my goals efficiently. The structured plans and hands-on support provided by SkillShareIndia enabled us to meet our objectives effectively and sustainably.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 20,
        name: "Thomas Silver",
        rating: 5,
        comment: "Fantastic team, highly skilled! Their knowledge in educational consultancy is unparalleled. They helped us streamline our operations and improve overall effectiveness within our institution.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 21,
        name: "Uma Coral",
        rating: 4,
        comment: "Very satisfied with the consultancy's services. They offered valuable insights into our operational practices, which led to significant improvements in both staff and student engagement.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 22,
        name: "Victor Tan",
        rating: 5,
        comment: "Great experience from start to finish. The team's dedication to our school’s success was evident, and their tailored strategies brought about remarkable improvements in our educational offerings.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 23,
        name: "Wendy Fuchsia",
        rating: 3,
        comment: "Good service but could be more affordable. While the expertise provided was beneficial, I felt the costs were on the higher side for a smaller institution like ours.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 24,
        name: "Xander Olive",
        rating: 5,
        comment: "Truly transformative experience for my school. SkillShareIndia's thorough analysis and actionable strategies revolutionized our approach, leading to significant positive changes across the board.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 25,
        name: "Yara Mint",
        rating: 4,
        comment: "Valuable insights and assistance. The strategies suggested were not only practical but also easy to implement, resulting in a noticeable boost in our school's performance and morale.",
        photo: "https://via.placeholder.com/150",
    },
    // Add additional reviews up to 27
    {
        id: 26,
        name: "Zoe Berry",
        rating: 5,
        comment: "An invaluable partnership that brought about positive change in our school culture. The team's support and guidance were key factors in our success this year.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 27,
        name: "Adam Stone",
        rating: 4,
        comment: "A great consultancy that provided us with essential tools and strategies for improvement. We have seen growth in both student satisfaction and academic performance since engaging with them.",
        photo: "https://via.placeholder.com/150",
    },
];

const Reviews = () => {
    return (
        <div className="container mx-auto my-10" style={{ backgroundColor: "#E0F7FA", padding: '20px', borderRadius: '8px' }}>
            <h2 className="text-3xl text-center font-bold mb-6">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review) => (
                    <motion.div
                        key={review.id}
                        className="bg-white rounded-lg shadow-md p-5 transition-transform transform hover:scale-105"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={review.photo}
                            alt={review.name}
                            className="w-24 h-24 rounded-full mb-4 mx-auto"
                        />
                        <h3 className="text-xl font-semibold text-center">{review.name}</h3>
                        <p className="text-yellow-500 text-center">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                        <p className="text-gray-600 text-center">{review.comment}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
