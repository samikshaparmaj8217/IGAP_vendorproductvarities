-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2022 at 10:09 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `igapecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `igap_vendorproductvarieties`
--

CREATE TABLE `igap_vendorproductvarieties` (
  `id` int(11) NOT NULL,
  `productid` int(11) NOT NULL,
  `colour` varchar(50) NOT NULL,
  `size` varchar(50) NOT NULL,
  `weight` double NOT NULL,
  `mrp` double NOT NULL,
  `price` double NOT NULL,
  `instock` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `igap_vendorproductvarieties`
--

INSERT INTO `igap_vendorproductvarieties` (`id`, `productid`, `colour`, `size`, `weight`, `mrp`, `price`, `instock`, `status`) VALUES
(1, 3, '0', '0', 23, 900, 789, '', ''),
(2, 3, 'red', 'm', 23, 900, 7, '', ''),
(4, 3, 'red', 'm', 23, 900, 789, '', ''),
(5, 3, 'red', 'm', 23, 900, 789, '', ''),
(6, 3, 'red', 'm', 23, 900, 789, 'undefined', 'closed'),
(8, 3, 'red', 'm', 23, 900, 789, 'N', 'open');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `igap_vendorproductvarieties`
--
ALTER TABLE `igap_vendorproductvarieties`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `igap_vendorproductvarieties`
--
ALTER TABLE `igap_vendorproductvarieties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
