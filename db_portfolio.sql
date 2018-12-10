-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 09, 2018 at 07:02 PM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_portfolio`
--

CREATE TABLE `tbl_portfolio` (
  `port_id` int(10) UNSIGNED NOT NULL,
  `port_title` varchar(35) NOT NULL,
  `port_desc` varchar(350) NOT NULL,
  `port_img` varchar(15) NOT NULL,
  `port_img2` varchar(15) NOT NULL,
  `port_category` varchar(20) NOT NULL,
  `port_date` varchar(30) NOT NULL,
  `port_about` varchar(300) NOT NULL,
  `port_url` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_portfolio`
--

INSERT INTO `tbl_portfolio` (`port_id`, `port_title`, `port_desc`, `port_img`, `port_img2`, `port_category`, `port_date`, `port_about`, `port_url`) VALUES
(1, 'Students Offering Support', 'Over the summer, I was the digital communication intern for Students Offering Support. In addition to using HTML, CSS, and php, in this role, I used WordPress, GitHub, CloudWays, and cPanel on a daily basis. With the instruction from the director, I redesigned two of their websites, studentsofferingsupport.ca and soscampus.com.', 'sos1.jpg', 'sos2.jpg', 'Web & Design', 'May 2018 - Sept. 2018', 'Students Offering Support is a multi-national charitable and entrepreneurial initiative that currently supports and develops individual SOS chapters within post-secondary institutions across North America. The organization’s business model – uniquely designed \"by students for students\".', 'sos.html'),
(2, 'FIMSSC', 'I am the Webmaster for the FIMSSC. As the Webmaster, I manage and maintain the website, hosting, and any other communication needed that pertains to the website. This year, I redesigned the FIMSSC website while maintaining the FIMSSC aesthetic. The last redesign of the website was over 4 years ago. ', 'fims1.jpg', 'fims2.jpg', 'Web & Design', 'April 2018 - Present', 'The Faculty of Information and Media Studies Students’ Council (FIMSSC) is a student-run organization at Western University that endeavours to enhance the undergraduate student experience in FIMS by providing various opportunities by which students can become involved in the faculty.', 'fimssc.html'),
(3, 'Nero Infuser Bottle', 'In this project, I took on a designer role. With the help of my partner, we established a brand presence and I made sure that our marketing plans adhere to the brand that we established. I was responsibly of the marketing plans the style guide.', 'nero1.jpg', 'nero2.jpg', 'Design', 'November 2018', 'Nero, meaning water in greek, is a mock infuser bottle design. In a group of two, my partner and I created concept designs of the bottle to prototyping the bottle through Cinema 4D. Our tagline for the brand is ‘drink the difference’.', 'nero.html'),
(4, 'Get Real', 'I have been involved with Get REAL since 2016. Over the past few years, I’ve been in different roles - from general member to execute member of the Western chapter. I created promotional material and was the photographer for our initiatives. Over the summer of 2018, I helped the HQ with marketing material.', 'getreal1.jpg', 'getreal2.jpg', 'Photography', 'November 2016 - Present', 'Get REAL is a Canadian Canadian non-profit focused on combatting LGBTQ+ discrimination and promoting acceptance in schools, summer camps, and workplaces. They accomplish this by offering inclusivity workshops to schools, camps, and businesses. ', 'getreal.html'),
(5, 'London Squash and Fitness Club', 'In 2018, my class had the opportunity to redesign the LSFC website. The LSFC board members wanted a refreshing site that could attract new members and also create a better user experience for current members. For this project, I was the web developer. I focused on clean design that was also easy to navigate around. ', 'lsfc1.jpg', 'lsfc2.jpg', 'Web & Design', 'April 2018', 'The London Squash & Fitness Club (LSFC) was founded in September 1966 and has maintained a focus on squash and fitness as a non-profit, member-owned organization. The club is active throughout the year with member ladders, club tournaments, city league matches, exhibitions, and social events. ', 'lsfc.html'),
(6, 'Demo Reel', 'This is my December 2018 demo reel. In this reel, I showcase some of my projects that I have worked on over the years. I highlight many of my web, design, and animation projects. ', 'reel1.jpg', 'reel2.jpg', 'Animation', 'December 2018', 'This demo reel showcases my different skills in web development, ui/ux design, graphic design and animation.', 'demoreel.html');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_testimonial`
--

CREATE TABLE `tbl_testimonial` (
  `testim_id` int(10) UNSIGNED NOT NULL,
  `testim_desc` varchar(250) NOT NULL,
  `testim_name` varchar(30) NOT NULL,
  `testim_title` varchar(45) NOT NULL,
  `testim_pic` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_testimonial`
--

INSERT INTO `tbl_testimonial` (`testim_id`, `testim_desc`, `testim_name`, `testim_title`, `testim_pic`) VALUES
(1, 'It\'s not often you come across a lovely, genuine person like Joanna; she is someone that others find comfort in being around, and there is no false pretence in her words or actions.', 'Raeesa Ghanie', 'Manager, The Spoke Rim & Tavern', 'reese.jpg'),
(2, 'Nice', 'Ismara Alvim', 'IT Manager, Students Offering Support', 'ismara.jpg'),
(3, 'She must be eating whatever is the equivalent of Wheaties for academic writing skills! ', 'Kane X. Faucher', 'Professor, Western University', 'kane.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_portfolio`
--
ALTER TABLE `tbl_portfolio`
  ADD UNIQUE KEY `port_id` (`port_id`);

--
-- Indexes for table `tbl_testimonial`
--
ALTER TABLE `tbl_testimonial`
  ADD PRIMARY KEY (`testim_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_portfolio`
--
ALTER TABLE `tbl_portfolio`
  MODIFY `port_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_testimonial`
--
ALTER TABLE `tbl_testimonial`
  MODIFY `testim_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
