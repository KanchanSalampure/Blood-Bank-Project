-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: projectdb
-- ------------------------------------------------------
-- Server version	5.7.36-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blood_bank`
--

DROP TABLE IF EXISTS `blood_bank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blood_bank` (
  `bloodbank_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`bloodbank_id`)
) ENGINE=MyISAM AUTO_INCREMENT=1005 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blood_bank`
--

LOCK TABLES `blood_bank` WRITE;
/*!40000 ALTER TABLE `blood_bank` DISABLE KEYS */;
INSERT INTO `blood_bank` VALUES (1001,'Friends2support Blood Bank','Chakan','9925462365','friends2support@gmail.com'),(1002,'Indian Red Cross Society','Haveli','9943363672','indianredcrosssociety@gmail.com'),(1003,'Sankalp India Foundation','Bhawanipeth','9423745984','sankalpindiafoundation@gmail.com'),(1004,'Rotary Blood Bank','ShivajiNagar','9960161884','rotarybloodbank@gmail.com');
/*!40000 ALTER TABLE `blood_bank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blood_inventry`
--

DROP TABLE IF EXISTS `blood_inventry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blood_inventry` (
  `inventry_id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `quantity_bag` int(11) DEFAULT NULL,
  `bank_id` int(11) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `camp_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`inventry_id`),
  KEY `FKdvdelj4qn7vwl009eu2a82yug` (`bank_id`),
  KEY `FKbjuwuajci19w0k0r6ivh68en9` (`camp_id`)
) ENGINE=MyISAM AUTO_INCREMENT=825 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blood_inventry`
--

LOCK TABLES `blood_inventry` WRITE;
/*!40000 ALTER TABLE `blood_inventry` DISABLE KEYS */;
INSERT INTO `blood_inventry` VALUES (801,'A+',32,1001,'2022-03-25',301),(802,'B+',3,1001,'2022-03-20',301),(803,'AB+',4,1001,'2022-03-25',301),(804,'AB-',2,1001,'2022-03-20',301),(805,'O+',3,1001,'2022-03-25',301),(806,'O-',4,1001,'2022-03-06',301),(807,'A+',6,1002,'2022-03-06',302),(808,'B+',2,1002,'2022-03-25',302),(809,'AB+',3,1002,'2022-03-06',302),(810,'AB-',3,1002,'2022-03-06',302),(811,'O+',4,1002,'2022-03-25',302),(812,'O-',4,1002,'2022-03-06',302),(813,'A+',2,1003,'2022-03-20',303),(814,'B+',3,1003,'2022-03-06',303),(815,'AB+',3,1003,'2022-03-06',303),(816,'AB-',4,1003,'2022-03-25',303),(817,'O+',5,1003,'2022-03-06',303),(818,'O-',1,1003,'2022-03-20',303),(819,'A+',2,1004,'2022-03-20',304),(820,'B+',1,1004,'2022-03-25',304),(821,'AB+',3,1004,'2022-03-06',304),(822,'AB-',3,1004,'2022-03-20',304),(823,'O+',4,1004,'2022-03-06',304),(824,'O-',2,1004,'2022-03-25',304);
/*!40000 ALTER TABLE `blood_inventry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `camps`
--

DROP TABLE IF EXISTS `camps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `camps` (
  `camp_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `organization` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `desciprtion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`camp_id`)
) ENGINE=MyISAM AUTO_INCREMENT=305 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `camps`
--

LOCK TABLES `camps` WRITE;
/*!40000 ALTER TABLE `camps` DISABLE KEYS */;
INSERT INTO `camps` VALUES (301,'Blood Sprint','National Blood Transfusion Council','2022-04-24','12:00:00','sadashiv peth','Donate blood, you have nothing to lose'),(302,'Blood Helpers','Athar Blood Bank','2022-04-26','09:00:00','sasoon hospital','Live a longer life with blood donation'),(303,'Blood Drive','Arihant Trust','2022-04-15','10:00:00','swargate ','It\'s great to give without any sweat for a change'),(304,'Give Blood','Transflower Association','2022-04-07','12:00:00','ABC chowk','Be the reason someone\'s heart beats strong');
/*!40000 ALTER TABLE `camps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donor`
--

DROP TABLE IF EXISTS `donor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donor` (
  `donation_id` int(11) NOT NULL AUTO_INCREMENT,
  `donor_id` int(11) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `quantity_bag` int(11) DEFAULT NULL,
  PRIMARY KEY (`donation_id`),
  KEY `FKhlkx2mu2k4tih2gqgoffuhune` (`donor_id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donor`
--

LOCK TABLES `donor` WRITE;
/*!40000 ALTER TABLE `donor` DISABLE KEYS */;
INSERT INTO `donor` VALUES (1,106,'2022-03-25',1),(2,107,'2022-03-25',1),(3,108,'2022-03-25',2),(4,109,'2022-03-25',1),(5,110,'2022-03-25',1),(6,111,'2022-03-25',1),(7,112,'2022-03-20',2),(8,113,'2022-03-20',1),(9,114,'2022-03-20',1),(10,115,'2022-03-20',2),(11,107,'2022-03-06',1),(12,109,'2022-03-06',2),(13,111,'2022-03-06',1),(14,113,'2022-03-06',1),(15,115,'2022-03-06',1);
/*!40000 ALTER TABLE `donor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_rerquest`
--

DROP TABLE IF EXISTS `patient_rerquest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_rerquest` (
  `patient_request_id` int(11) NOT NULL AUTO_INCREMENT,
  `patien_id` int(11) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `quntity` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `paymentmode` varchar(255) DEFAULT NULL,
  `transactionmode` varchar(255) DEFAULT NULL,
  `paymentstatus` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`patient_request_id`),
  KEY `FKj2lwf0yf8bda5xbm1e2mhka7p` (`patien_id`)
) ENGINE=MyISAM AUTO_INCREMENT=209 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_rerquest`
--

LOCK TABLES `patient_rerquest` WRITE;
/*!40000 ALTER TABLE `patient_rerquest` DISABLE KEYS */;
INSERT INTO `patient_rerquest` VALUES (201,116,'2022-03-30',1,'yes','COD','NEFT','yes'),(202,117,'2022-04-14',2,'yes','GPay','IMPS','yes'),(203,118,'2022-04-05',3,'No','COD','IMPS','yes'),(204,119,'2022-03-30',1,'yes','GPay','NEFT','yes'),(205,120,'2022-04-05',1,'yes','GPay','IMPS','No'),(206,116,'2022-03-30',1,'yes','COD','RTGS','yes'),(207,117,'2022-04-05',2,'No','GPay','RTGS','No'),(208,119,'2022-04-14',2,'yes','COD','NEFT','yes');
/*!40000 ALTER TABLE `patient_rerquest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_type` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `blood_type` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=124 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (101,'SInaya','55501','Admin','Inaya','Sharma','Female','1991-03-02','A+','inayasharma@gmail.com','Junnar','9282736473'),(102,'ANaya','55502','Staff','Naya','Acharya','Female','1991-04-04','B+','nayaacharya@gmail.com','Haveli','9487321834'),(103,'AIshaan','55503','staff','Ishaan','Agarwal','Male','1992-05-05','O+','ishaanagarwal@gmail.com','Haveli','8796504432'),(104,'KDhruv','55504','staff','Dhruv','Khatri','Male','1993-06-06','AB+','dhruvkhatri@gmail.com','Maval','7867584930'),(105,'AAmar','55505','staff','Amar','Ahuja','Male','1993-07-07','AB-','amarahuja@gmail.com','Mulshi','7685940302'),(106,'ADiya','55506','Donor','Diya','Anand','Female','1992-08-08','A+','diyaanand@gmail.com','Haveli','9899777709'),(107,'PAnanya','55507','Donor','Ananya','Patel','Female','1994-09-09','A-','ananyapatel@gmail.com','Haveli','9799965043'),(108,'RAgastya','55508','Donor','Agastya','Reddy','Male','1994-10-10','B+','agastyareddy@gmail.com','Bhopodi','7685940567'),(109,'BJaya','55509','Donor','Jaya','Bakshi','Female','1995-11-11','B-','jayabakshi@gmail.com','Chakan','9087099099'),(110,'ASana','55510','Donor','Sana','Anthony','Female','1995-12-12','O+','sanaanthony@gmail.com','ShivajiNagar','9878495564'),(111,'BAditi','55511','Donor','Aditi','Banerjee','Female','1996-03-13','O-','aditibanerjee@gmail.com','Kasbapeth','8796950003'),(112,'BAjay','55512','Donor','Ajay','Bhatt','Male','1997-04-14','AB+','ajaybhatt@gmail.com','Bhawanipeth','9087499699'),(113,'BAnjali','55513','Donor','Anjali','Basu','Female','1997-06-16','AB-','anjalibasu@gmail.com','Bhawanipeth','9787099065'),(114,'VNikhil','55514','Donor','Nikhil','Varma','Male','1998-06-16','A+','nikhilvarma@gmail.com','Chakan','9047077099'),(115,'DShaan','55515','Donor','Shaan','Dalal','Male','1998-07-17','B+','shaandalal@gmail.com','Chakan','7087095089'),(116,'CSahil','55516','Patient','Sahil','Chowdhary','Male','1993-08-18','A-','sahilchowdhary@gmail.com','ShivajiNagar','9007099907'),(117,'CIshani','55517','Patient','Ishaani','Chabra','Female','1992-09-19','O+','ishaanichabra@gmail.com','Chakan','9887095432'),(118,'CAmbar','55518','Patient','Ambar','Chadha','Male','1991-02-20','AB+','ambarchadha@gmail.com','Bhawanipeth','9923987030'),(119,'CDarsh','55519','Patient','Darsh','Chawla','Male','1995-03-21','B+','darshchawla@gmail.com','Kasbapeth','9921475400'),(120,'AAshwin','55520','Patient','Ashwin','Apte','Male','1998-03-22','A+','ashwinapte@gmail.com','ShivajiNagar','8796203615'),(121,'kSala','ks7007','Admin','kanchan','salampure','Male','1991-03-02','A+','kanchansala@gmail.com','Aurangabad','8796465096'),(122,'rohitb','rohit7007','Admin','Rohit','Bachche','Male','1996-08-14','b+','rohitbachche20@gmail.com','kolhapur','9089795022'),(123,'Gsakshi','7218894050','Admin','sakshi','gandalwar','Female','1998-01-06','b+','sakshigandalwar@gmail.com','Nanded','8498339322');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-14 13:14:43
