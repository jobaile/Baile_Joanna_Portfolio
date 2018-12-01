-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 30, 2018 at 07:20 PM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `baile_j_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_testimonial`
--

CREATE TABLE `tbl_testimonial` (
  `testim_id` int(10) UNSIGNED NOT NULL,
  `testim_desc` varchar(250) NOT NULL,
  `testim_name` varchar(30) NOT NULL,
  `testim_title` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_testimonial`
--

INSERT INTO `tbl_testimonial` (`testim_id`, `testim_desc`, `testim_name`, `testim_title`) VALUES
(1, 'Amazing', 'John Smith', 'John Smith Job'),
(2, 'Nice', 'Jane Smith', 'Jane Smith Job'),
(3, 'Cool', 'Debbie Smith', 'Debbie Smith Job');

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
(1, 'Students Offering Support', 'Web', 'May to August 2018', 'sos.jpg', 'sos.html', 'Students Offering Support is a multi-national charitable and entrepreneurial initiative that currently supports and develops individual SOS chapters within post-secondary institutions across North America.');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `tbl_testimonial`
--
ALTER TABLE `tbl_testimonial`
  MODIFY `testim_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_work`
--
ALTER TABLE `tbl_work`
  MODIFY `work_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
