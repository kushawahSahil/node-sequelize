-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 18, 2022 at 04:28 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodesequelize`
--

-- --------------------------------------------------------

--
-- Table structure for table `addressbooks`
--

CREATE TABLE `addressbooks` (
  `id` int(11) NOT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `addressLine1` varchar(255) DEFAULT NULL,
  `addressLine2` varchar(255) DEFAULT NULL,
  `Country` varchar(255) DEFAULT NULL,
  `State` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `PinCode` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addressbooks`
--

INSERT INTO `addressbooks` (`id`, `Title`, `addressLine1`, `addressLine2`, `Country`, `State`, `City`, `PinCode`) VALUES
(1, 'corona', 'delta', 'omicron', 'india', 'gujrat', 'ahmedabad', 382418);

-- --------------------------------------------------------

--
-- Table structure for table `registrations`
--

CREATE TABLE `registrations` (
  `id` int(11) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `Image` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT 'test@gmail.com',
  `Password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registrations`
--

INSERT INTO `registrations` (`id`, `Name`, `gender`, `Image`, `Email`, `Password`) VALUES
(1, 'sahil Kushawah', 'Male', 'Image-1642474499323', 'kushawah.sahil2001@gamil.com', '$2b$10$JJ8zMuSL86mMuLbGu1LKcuDcgBctawEctSUojdpZJhKp2MWjfF72W'),
(2, 'rahul', 'Male', 'Image-1642413915919', 'rahul@gamil.com', '$2b$10$WHYAsEb3O6PCnSWYioJ/B.WK0lnp3L/zPvpvt/yxF9am7dJ721Fxq');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addressbooks`
--
ALTER TABLE `addressbooks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registrations`
--
ALTER TABLE `registrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addressbooks`
--
ALTER TABLE `addressbooks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `registrations`
--
ALTER TABLE `registrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
