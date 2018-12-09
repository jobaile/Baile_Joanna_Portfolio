-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 09, 2018 at 08:02 AM
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
  `port_desc` varchar(250) NOT NULL,
  `port_img` varchar(15) NOT NULL,
  `port_img2` varchar(15) NOT NULL,
  `port_category` varchar(20) NOT NULL,
  `port_date` varchar(30) NOT NULL,
  `port_about` varchar(200) NOT NULL,
  `port_url` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_portfolio`
--

INSERT INTO `tbl_portfolio` (`port_id`, `port_title`, `port_desc`, `port_img`, `port_img2`, `port_category`, `port_date`, `port_about`, `port_url`) VALUES
(1, 'Students Offering Support', 'Over the summer, I had the opportunity to intern with Students Offering Support (SOS) and redesigned and code multiple websites.', 'sos1.jpg', 'sos2.jpg', 'Web & Design', 'May 2018 - Sept. 2018', 'Students Offering Support is a multi-national charitable and entrepreneurial initiative that currently supports and develops individual post-secondary institutions across North America.', 'sos.html'),
(2, 'FIMSSC', 'I am currently the Webmaster for FIMSSC where I update and edit the website through Wordpress.', 'fims1.jpg', 'fims2.jpg', 'Web & Design', 'April 2018 - Present', 'The Faculty of Information and Media Studies Students’ Council is a student-run organization at Western University that endeavours to enhance the undergraduate student experience in FIMS.', 'fimssc.html'),
(3, 'Nero Infuser Bottle', 'Created with Jaclyn Flomen, we created a concept bottle for a smart infuser water bottle.', 'nero1.jpg', 'nero2.jpg', 'Design', 'November 2018', 'Drink the difference.', 'nero.html'),
(4, 'Get Real', 'Since 2016, I have been a member of Get Real, and have been involved with their photography, promotions, and marketing.', 'getreal1.jpg', 'getreal2.jpg', 'Photography', 'November 2016 - Present', 'A Canadian non-profit focused on combatting LGBTQ+ discrimination and promoting acceptance in schools, summer camps, and workplaces.\r\n', 'getreal.html'),
(5, 'London Squash and Fitness Club', 'Worked alongside with Jaclyn Flomen, we created on a case study with the London Squash and Fitness Club.', 'lsfc1.jpg', 'lsfc2.jpg', 'Web & Design', 'April 2018', 'The London Squash & Fitness Club (LSFC) was founded in September 1966 and has maintained a focus on squash and fitness as a non-profit, member-owned organization.', 'lsfc.html'),
(6, 'Sharing Cultures, Shaping Futures', 'In May 2015, I had the opportunity to go to Iqaluit, NU to learn about the culture and take photos that can be found on the eBook.', 'iqaluit1.jpg', 'iqaluit2.jpg', 'Photography', 'May 2015', 'An opportunity for DPCDSB students to take part in a trip to Iqaluit, Nunavut to learn about the Indigenous life and culture.', 'iqaluit.html');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_services`
--

CREATE TABLE `tbl_services` (
  `service_id` int(10) UNSIGNED NOT NULL,
  `services_title` varchar(25) NOT NULL,
  `services_desc` varchar(200) NOT NULL,
  `services_img` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_services`
--

INSERT INTO `tbl_services` (`service_id`, `services_title`, `services_desc`, `services_img`) VALUES
(1, 'Web Development', 'I like creating intuitive, clean, and dynamic websites', 'web.svg'),
(2, 'UX/UI Design', 'Beautiful designs with functional user experience', 'design.svg'),
(3, 'Digital Marketing', 'Social media changes so fast and I want to ensure that you’re updated', 'marketing.svg'),
(4, 'A Killer Playlist', 'I just really love music.', 'playlist.svg');

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

-- --------------------------------------------------------

--
-- Table structure for table `tbl_work`
--

CREATE TABLE `tbl_work` (
  `work_id` int(10) UNSIGNED NOT NULL,
  `work_title` varchar(50) NOT NULL,
  `work_category` varchar(25) NOT NULL,
  `work_date` varchar(20) NOT NULL,
  `work_thumb` varchar(30) NOT NULL,
  `work_url` varchar(100) NOT NULL,
  `work_desc` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_work`
--

INSERT INTO `tbl_work` (`work_id`, `work_title`, `work_category`, `work_date`, `work_thumb`, `work_url`, `work_desc`) VALUES
(1, 'Students Offering Support', 'Web', 'May to August 2018', 'sos.jpg', 'sos.html', 'Students Offering Support is a multi-national charitable and entrepreneurial initiative that currently supports and develops individual SOS chapters within post-secondary institutions across North America.'),
(2, 'FIMSSC', 'Web', 'April to Present', 'fimssc.jpg', 'fims.html', 'The Faculty of Information and Media Studies Students’ Council (FIMSSC) is a student-run organization at Western University that endeavours to enhance the undergraduate student experience in FIMS by providing various opportunities by which students can become involved in the faculty.'),
(3, 'London Squash & Fitness Club', 'Web', 'April 2018', 'lsfc.jpg', 'lsfc.html', 'The London Squash & Fitness Club (LSFC) is a squash facility in London, Ontario. I got the opportunity to create a working prototype of a redesign for their website.'),
(4, 'Get Real', 'Photography', 'March 2018', 'getreal.jpg', 'getreal.html', 'Get Real is a non-profit focused on combatting LGBTQ+ discrimination and promoting acceptance in schools, summer camps, and workplaces. I am part of the executive ‘hype’ team at the Western campus.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_portfolio`
--
ALTER TABLE `tbl_portfolio`
  ADD UNIQUE KEY `port_id` (`port_id`);

--
-- Indexes for table `tbl_services`
--
ALTER TABLE `tbl_services`
  ADD UNIQUE KEY `service_id` (`service_id`);

--
-- Indexes for table `tbl_testimonial`
--
ALTER TABLE `tbl_testimonial`
  ADD PRIMARY KEY (`testim_id`);

--
-- Indexes for table `tbl_work`
--
ALTER TABLE `tbl_work`
  ADD PRIMARY KEY (`work_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_portfolio`
--
ALTER TABLE `tbl_portfolio`
  MODIFY `port_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_services`
--
ALTER TABLE `tbl_services`
  MODIFY `service_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_testimonial`
--
ALTER TABLE `tbl_testimonial`
  MODIFY `testim_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_work`
--
ALTER TABLE `tbl_work`
  MODIFY `work_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
