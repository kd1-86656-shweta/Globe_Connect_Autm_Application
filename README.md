# Globe_Connect_Autm_Application


Globe Connect
Social media application for like minded people

TABLE OF CONTENTS 

1.INTRODUCTION

2. PRODUCT OVERVIEW AND SUMMARY
2.1. Purpose 
2.2. Scope 
2.3. Overview
2.4. Feasibility Study 

3. REQUIREMENTS FULFILLED
3.1. Functional Requirements 
3.2. Non-Functional Requirements

4. PROJECT DESIGN
4.1. Data Model 
4.2. Project Architecture 
4.3. ER Diagram 

5. PROJECT SCREENSHOTS
5.1. Customer 
5.2. Admin 

6. TESTING 

7. CONCLUSION

8. FUTURE SCOPE 

9. REFERENCES



ABSTRACT



Social platforms have evolved significantly, providing users with diverse ways to interact and engage with like-minded communities. However, most existing platforms lack a structured approach to community-driven discussions with effective moderation tools.
Globe Connect is a social platform that enables users to create, join, and participate in communities by posting, commenting, and reporting content. To maintain a safe and engaging environment, admins are equipped with moderation tools to review reports, manage communities, and block users if necessary.
The platform is built using a microservices architecture, ensuring scalability and maintainability. Java serves as the backend technology, handling business logic and data processing, while React is used for client-side rendering, offering a seamless and responsive user experience. MySQL acts as the primary database, efficiently managing user and community data.
Designed with modularity in mind, Globe Connect ensures minimal coupling and high cohesion, making it robust, scalable, and adaptable to future enhancements.


















⦁	INTRODUCTION

The digital age has transformed the way people interact, communicate, and build relationships. With the rise of social media, online platforms have become the primary means for individuals to connect, share ideas, and participate in discussions. While these platforms offer a vast space for global interaction, they often lack well-defined communities where users can engage in meaningful conversations based on shared interests. Additionally, the absence of structured engagement and moderation tools can lead to unregulated content, misinformation, and a decline in user experience.
Globe Connect is designed to address these challenges by providing a dedicated space for interest-based communities. The platform enables users to create, join, and participate in communities where they can post content, comment on discussions, and interact with like-minded individuals. To ensure a safe and healthy environment, users can also report inappropriate or harmful content, allowing for community-driven moderation.
A key feature of Globe Connect is its strong moderation framework. Admins are equipped with powerful moderation tools, enabling them to review user reports, manage community activities, and take necessary actions such as blocking users who violate guidelines. This structured approach ensures that discussions remain relevant, respectful, and free from disruptive content, fostering a more engaging user experience.
To deliver a high-performance and scalable platform, Globe Connect follows a microservices architecture, allowing different services to operate independently while ensuring seamless integration. The backend is powered by Java, providing a robust foundation for handling business logic, authentication, and data processing. On the frontend, React is utilized to create a dynamic and interactive user interface, offering a smooth and immersive browsing experience. MySQL serves as the primary database, efficiently managing user profiles, community data, and interactions while maintaining security and data integrity.
By offering a structured and community-driven approach to social engagement, Globe Connect aims to redefine online interactions by fostering well-moderated, interest-based discussions. Whether users are looking to share knowledge, seek advice, or simply connect with others who share their passions, the platform provides a safe, interactive, and engaging digital environment.









2. PRODUCT OVERVIEW AND SUMMARY

2.1. PURPOSE
Globe Connect is a social networking platform designed to create interest-based communities where users can engage, share, and discuss various topics. The platform enables users to create, join, and participate in communities through posting, commenting, and reporting content. By providing structured spaces for discussions, Globe Connect ensures meaningful interactions while maintaining a safe and well-moderated environment.
A key feature of the platform is its community-driven approach combined with powerful moderation tools. Admins have the ability to review reported content, manage communities, and take necessary actions such as blocking disruptive users. This ensures that discussions remain constructive and inclusive for all members.
2.2. SCOPE
Globe Connect aims to deliver a web-based application that provides users with a seamless and engaging social experience. The platform offers the following functionalities:
⦁	Users can:
⦁	Create and join communities based on their interests.
⦁	Post content, comment on discussions, and report inappropriate content.
⦁	View their activity history and stay updated on community interactions.
⦁	Update their profile information.
⦁	Admins can:
⦁	Manage communities, moderate discussions, and review reports.
⦁	Take necessary actions such as blocking users or removing content that violates guidelines.
This project does not support private messaging or real-time chat features at this stage. However, future enhancements may include notifications, live interactions, and additional security layers.
2.3. OVERVIEW

A. TECHNOLOGIES USED
i. FRONTEND:
⦁	React.js
⦁	CSS
⦁	HTML
⦁	JS
⦁	AXIOS


ii. BACKEND:
⦁	J2EE
⦁	Spring Boot
iii. DATABASE MANAGEMENT SYSTEM:
⦁	MySQL
iv. CONTAINERIZATION:
⦁	Docker
This microservices-based architecture ensures scalability, security, and high performance, making Globe Connect a reliable and future-ready social platform.






















B. FEATURES PROVIDED
i. FOR ADMINS
a. Login & Logout – Admins can securely log in and log out of their accounts.
b. Manage Communities – Admins can create, update, and delete communities.
c. User Management – Admins can view all registered users and take necessary actions such as blocking disruptive users.
d. Content Moderation – Admins can review reported posts and comments, taking action if they violate platform guidelines.
e. Community Reports – Admins have access to reports and insights about community activities and flagged content.
f. Approve or Reject Reports – Admins can take necessary action on reported posts or comments to maintain a safe environment.
g. Ban or Unban Users – If a user consistently violates rules, admins can block or reinstate their access.

ii. FOR USERS
a. Browse Communities – Users can explore and discover new communities based on their interests.
b. Register, Login & Logout – New users can register, while existing users can log in and log out of their accounts securely.
c. Create & Join Communities – Users can start their own communities or join existing ones.
d. Post Content & Engage – Users can share posts, comment, and interact with other community members.
e. Report Inappropriate Content – Users can flag posts or comments that violate community guidelines.
f. Update Profile – Users can edit their profile information, such as name, bio, and profile picture.
g. View Activity History – Users can track past interactions in communities they have engaged in.
h. Leave a Community – Users can exit communities they no longer wish to be a part of.
Globe Connect provides a structured, well-moderated, and engaging platform for users to interact and share ideas while ensuring a safe and organized online experience.






2.4. FEASIBILITY STUDY
Feasibility analysis determines whether a project is viable before development begins. It ensures that the system can be successfully implemented with available resources while fulfilling its intended purpose.
A. TECHNICAL FEASIBILITY
This study evaluates whether the project can be developed using the available technology, manpower, software, and hardware.
Globe Connect leverages modern, scalable, and efficient technologies to ensure a seamless experience for users:
⦁	React.js powers the front-end, offering a dynamic and lightweight interface. Its component-based architecture enables faster page rendering and modular scalability.
⦁	Spring Boot and J2EE handle the backend, ensuring a robust, efficient, and transactional system for managing user interactions and community data.
⦁	MySQL serves as the database, providing secure and structured data storage for users, communities, posts, and reports.
⦁	Docker is used to containerize and deploy the system, ensuring consistency, scalability, and smooth cross-platform compatibility.
With this tech stack, Globe Connect can efficiently handle high user engagement, real-time interactions, and seamless scaling as the platform grows.
B. OPERATIONAL FEASIBILITY
Operational feasibility examines whether users can effectively understand and use the system.
Globe Connect is designed with a user-friendly and intuitive interface that ensures easy navigation:
⦁	A clean and visually appealing UI encourages engagement and ease of use.
⦁	Universally recognized icons and structured layouts make the platform accessible, even for non-technical users.
⦁	The logical arrangement of information ensures a smooth user journey, making interactions intuitive and enjoyable.
⦁	Admin tools provide a clear and structured moderation system, allowing community management without technical complexities.
By focusing on usability and engagement, Globe Connect ensures a positive experience for all users.


C. ECONOMICAL FEASIBILITY
Economic feasibility assesses whether the system is cost-effective to develop and maintain.
⦁	Globe Connect is built using open-source and widely supported technologies, making it a cost-effective solution.
⦁	Technologies like React.js, Spring Boot, and MySQL are free and have strong community support, reducing the need for costly third-party services.
⦁	Using Docker for deployment minimizes infrastructure costs by allowing efficient resource utilization across various environments.
As a result, Globe Connect provides a scalable and budget-friendly solution for building and managing online communities.























3. REQUIREMENTS FULFILLED
3.1. FUNCTIONAL REQUIREMENTS
The following functional requirements are fulfilled by Globe Connect:
⦁	Users can register, log in, and log out to access their accounts.
⦁	Users can create, join, and leave communities.
⦁	Users can post content within their communities, limited to images.
⦁	Users can comment on posts and engage in discussions.
⦁	Users can report inappropriate posts or comments for admin review.
⦁	Admins can view reports, review content, and take necessary actions, including blocking users if needed.
⦁	Admins can manage communities by adding or removing categories.
⦁	Users can update their profile information, including profile pictures.
⦁	The system fetches community details dynamically from the database when users create posts.
⦁	All interactions are stored and retrieved securely for a smooth experience.
3.2. NON-FUNCTIONAL REQUIREMENTS
The following non-functional requirements are met by Globe Connect:
⦁	The system is highly performant and scalable, leveraging React.js, J2EE, Spring Boot, and MySQL.
⦁	Dockerization ensures smooth deployment and cross-platform compatibility.
⦁	A clean and responsive UI ensures an intuitive user experience.
⦁	The use of efficient backend frameworks allows quick response times for both users and admins.
⦁	Security measures ensure safe user authentication and data protection.













4. PROJECT DESIGN

4.1. DATA MODEL 
The following tables depict the database design used for “Globe Connect” application:

a. Tables Related to User Details 
 
Fig. User Table

b. Tables Related to Post
 
Fig. Posts Table



 
Fig. Comments Table

 
Fig. Votes Table

c. Tables Related to Communities

 
Fig. Community Table

 
Fig. User and Community Joined Table
d. Tables Related to Admin


Fig. Admin Table

4.2 PROJECT ARCHITECTURE

 











4.2 ER DIAGRAM

 
 


 















5. PROJECT SCREENSHOTS

a. User View

 
Fig. Login Page
 
Fig. Register Page
 
Fig. Home Page

 
Fig. List of Communities Page

 
Fig. User Profile Page

 
Fig. Create Community Page






 
Fig. Join Community Page

b. Admin View


 
                                                  Fig. Signup Page



 
                                        Fig.  Login Page

 
                                                          Fig. Dashboard Page

 
                                                        Fig. All Community Page


 
                                                      Fig. All Post Page

 
                                                      Fig. All User Page

 
                                                      Fig. About page

 
                                                      Fig. Terms of Services


6. TESTING
Testing ensures that Globe Connect functions as expected and provides a seamless user experience. Proper testing helps detect and resolve errors before deployment, ensuring a stable and reliable system.
Throughout the development process, we conducted manual testing on each feature to validate its functionality. Below is a summary of our test results:
A. USER FEATURES TEST

Sr.No	Description	Outcome	Result
1	Register a new user	User details were successfully saved in the database.	Passed
2	Login as a user	Authenticated user details were retrieved from the database.	Passed
3	Create a new community	Community was successfully added to the database.	Passed
4	Join a community	User was successfully associated with the selected community.	Passed
5	Create a new post	Post was stored in the database with correct details.	Passed
6	Comment on a post	Comment was saved and displayed correctly.	Passed
7	Report a post	Report details were saved and flagged for admin review.	Passed
8	Update profile	Profile information was updated in the database.	Passed
9	Logout	User session was successfully cleared.	Passed











B. ADMIN FEATURES TEST

Sr.No	Description	Outcome	Result
1	Admin login	Admin details retrieved and authenticated.	Passed
2	View all post	Reported posts/comments were fetched successfully.	Passed
3	Take action on reports	Admin was able to delete posts or block users.	Passed
4	View all users	List of registered users was retrieved from the database.	Passed
5	View all Communities	Admin was able to add or delete communities.	Passed
6	Logout	Admin session was successfully cleared.	Passed
















7. CONCLUSION
Globe Connect is a modern and interactive social platform designed to bring people together in shared communities. Our project offers an intuitive user experience, efficient content management, and a secure environment for discussion and engagement.
By leveraging Java (Spring Boot), React.js, and MySQL, we have built a scalable, high-performance system. Every feature has been rigorously tested to ensure reliability, and open-source technologies help keep costs minimal.
In conclusion, Globe Connect provides a seamless, secure, and community-driven experience, making it an ideal platform for users to create, join, and interact in various online communities.























9. REFERENCES
During the development of Globe Connect, we referred to the following resources:
React Documentation
Spring Boot Documentation
Spring Data JPA Reference
Java EE API Documentation
Baeldung⦁	 HYPERLINK "https://www.baeldung.com/"⦁	 HYPERLINK "https://www.baeldung.com/"⦁	 HYPERLINK "https://www.baeldung.com/"⦁	 ⦁	 HYPERLINK "https://www.baeldung.com/"⦁	–⦁	 HYPERLINK "https://www.baeldung.com/"⦁	 Java ⦁	 HYPERLINK "https://www.baeldung.com/"⦁	 HYPERLINK "https://www.baeldung.com/"⦁	 HYPERLINK "https://www.baeldung.com/"⦁	&⦁	 HYPERLINK "https://www.baeldung.com/"⦁	 HYPERLINK "https://www.baeldung.com/"⦁	 HYPERLINK "https://www.baeldung.com/"⦁	 Spring Tutorials
W3Schools ⦁	 HYPERLINK "https://www.w3schools.com/"⦁	–⦁	 HYPERLINK "https://www.w3schools.com/"⦁	 Web Development Tutorials
MDN Web Docs
GitHub ⦁	 HYPERLINK "https://github.com/"⦁	–⦁	 HYPERLINK "https://github.com/"⦁	 Open Source Projects
These resources helped us understand and implement various technologies efficiently in our project.













