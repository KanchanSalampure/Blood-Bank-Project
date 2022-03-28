-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: blood_bank_management_system
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `blood_inventory`
--

DROP TABLE IF EXISTS `blood_inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blood_inventory` (
  `BloodInv_ID` int NOT NULL,
  `Type` varchar(65) DEFAULT NULL,
  `Quantity(Bag)` int NOT NULL,
  `BloodBank_ID` int NOT NULL,
  `Date` date DEFAULT NULL,
  `Camp_ID` int NOT NULL,
  PRIMARY KEY (`BloodInv_ID`),
  KEY `BloodBank_ID_idx` (`BloodBank_ID`),
  KEY `Camp_ID_idx` (`Camp_ID`),
  CONSTRAINT `BloodBank_ID` FOREIGN KEY (`BloodBank_ID`) REFERENCES `bloodbank` (`BloodBank_ID`),
  CONSTRAINT `Camp_ID` FOREIGN KEY (`Camp_ID`) REFERENCES `camp` (`Camp_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blood_inventory`
--

LOCK TABLES `blood_inventory` WRITE;
/*!40000 ALTER TABLE `blood_inventory` DISABLE KEYS */;
INSERT INTO `blood_inventory` VALUES (801,'A+',2,1001,'2022-03-25',301),(802,'B+',3,1001,'2022-03-20',301),(803,'AB+',4,1001,'2022-03-25',301),(804,'AB-',2,1001,'2022-03-20',301),(805,'O+',3,1001,'2022-03-25',301),(806,'O-',4,1001,'2022-03-06',301),(807,'A+',6,1002,'2022-03-06',302),(808,'B+',2,1002,'2022-03-25',302),(809,'AB+',3,1002,'2022-03-06',302),(810,'AB-',3,1002,'2022-03-06',302),(811,'O+',4,1002,'2022-03-25',302),(812,'O-',4,1002,'2022-03-06',302),(813,'A+',2,1003,'2022-03-20',303),(814,'B+',3,1003,'2022-03-06',303),(815,'AB+',3,1003,'2022-03-06',303),(816,'AB-',4,1003,'2022-03-25',303),(817,'O+',5,1003,'2022-03-06',303),(818,'O-',1,1003,'2022-03-20',303),(819,'A+',2,1004,'2022-03-20',304),(820,'B+',1,1004,'2022-03-25',304),(821,'AB+',3,1004,'2022-03-06',304),(822,'AB-',3,1004,'2022-03-20',304),(823,'O+',4,1004,'2022-03-06',304),(824,'O-',2,1004,'2022-03-25',304);
/*!40000 ALTER TABLE `blood_inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bloodbank`
--

DROP TABLE IF EXISTS `bloodbank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bloodbank` (
  `BloodBank_ID` int NOT NULL,
  `Name` varchar(85) NOT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `Contact_No` varchar(85) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Location` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`BloodBank_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bloodbank`
--

LOCK TABLES `bloodbank` WRITE;
/*!40000 ALTER TABLE `bloodbank` DISABLE KEYS */;
INSERT INTO `bloodbank` VALUES (1001,'Friends2support Blood Bank','Chakan','9925462365','friends2support@gmail.com',NULL),(1002,'Indian Red Cross Society','Haveli','9943363672','indianredcrosssociety@gmail.com',NULL),(1003,'Sankalp India Foundation','Bhawanipeth','9423745984','sankalpindiafoundation@gmail.com',NULL),(1004,'Rotary Blood Bank','ShivajiNagar','9960161884','rotarybloodbank@gmail.com',NULL);
/*!40000 ALTER TABLE `bloodbank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `camp`
--

DROP TABLE IF EXISTS `camp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `camp` (
  `Camp_ID` int NOT NULL,
  `Name` varchar(45) NOT NULL,
  `OrganizationName` varchar(85) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Time` time DEFAULT NULL,
  `Description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Camp_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `camp`
--

LOCK TABLES `camp` WRITE;
/*!40000 ALTER TABLE `camp` DISABLE KEYS */;
INSERT INTO `camp` VALUES (301,'Blood Sprint','National Blood Transfusion Council','2022-04-24','12:00:00',NULL),(302,'Blood Helpers','Athar Blood Bank','2022-04-26','09:00:00',NULL),(303,'Blood Drive','Arihant Trust','2022-04-15','10:00:00',NULL),(304,'Give Blood','Transflower Association','2022-04-07','12:00:00',NULL);
/*!40000 ALTER TABLE `camp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donation`
--

DROP TABLE IF EXISTS `donation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donation` (
  `Donation_ID` int NOT NULL,
  `Donor_ID` int NOT NULL,
  `Date` date DEFAULT NULL,
  `Quantity(Bags)` int DEFAULT NULL,
  `BloodReport_Image` longblob,
  PRIMARY KEY (`Donation_ID`),
  KEY `Donor_ID_idx` (`Donor_ID`),
  CONSTRAINT `Donor_ID` FOREIGN KEY (`Donor_ID`) REFERENCES `user` (`User_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donation`
--

LOCK TABLES `donation` WRITE;
/*!40000 ALTER TABLE `donation` DISABLE KEYS */;
INSERT INTO `donation` VALUES (1,106,'2022-03-25',1,NULL),(2,107,'2022-03-25',1,NULL),(3,108,'2022-03-25',2,NULL),(4,109,'2022-03-25',1,NULL),(5,110,'2022-03-25',1,NULL),(6,111,'2022-03-25',1,NULL),(7,112,'2022-03-20',2,NULL),(8,113,'2022-03-20',1,NULL),(9,114,'2022-03-20',1,NULL),(10,115,'2022-03-20',2,NULL),(11,107,'2022-03-06',1,NULL),(12,109,'2022-03-06',2,NULL),(13,111,'2022-03-06',1,NULL),(14,113,'2022-03-06',1,NULL),(15,115,'2022-03-06',1,NULL);
/*!40000 ALTER TABLE `donation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patientrequest`
--

DROP TABLE IF EXISTS `patientrequest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patientrequest` (
  `PatientRequest_ID` int NOT NULL,
  `Patient_ID` int NOT NULL,
  `Date` date DEFAULT NULL,
  `Quantity` int DEFAULT NULL,
  `Status` varchar(40) DEFAULT NULL,
  `Paymentmode` varchar(85) DEFAULT NULL,
  `Transactionmode` varchar(85) DEFAULT NULL,
  `PaymentStatus` varchar(65) DEFAULT NULL,
  PRIMARY KEY (`PatientRequest_ID`),
  KEY `Patient_ID_idx` (`Patient_ID`),
  CONSTRAINT `Patient_ID` FOREIGN KEY (`Patient_ID`) REFERENCES `user` (`User_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patientrequest`
--

LOCK TABLES `patientrequest` WRITE;
/*!40000 ALTER TABLE `patientrequest` DISABLE KEYS */;
INSERT INTO `patientrequest` VALUES (201,116,'2022-03-30',1,'yes','COD','NEFT','yes '),(202,117,'2022-04-14',2,'yes','GPay','IMPS','yes '),(203,118,'2022-04-05',3,'No','COD','IMPS','yes '),(204,119,'2022-03-30',1,'yes','GPay','NEFT','yes '),(205,120,'2022-04-05',1,'yes','GPay','IMPS','No'),(206,116,'2022-03-30',1,'yes','COD','RTGS','yes '),(207,117,'2022-04-05',2,'No','GPay','RTGS','No'),(208,119,'2022-04-14',2,'yes','COD','NEFT','yes ');
/*!40000 ALTER TABLE `patientrequest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `User_ID` int NOT NULL,
  `User_name` varchar(65) NOT NULL,
  `Password` varchar(75) NOT NULL,
  `User_type` varchar(45) NOT NULL,
  `First_name` varchar(65) NOT NULL,
  `Last_name` varchar(65) NOT NULL,
  `Gender` varchar(65) NOT NULL,
  `DOB` date NOT NULL,
  `Blood_type` varchar(45) NOT NULL,
  `Email_ID` varchar(100) NOT NULL,
  `Address` varchar(100) NOT NULL,
  PRIMARY KEY (`User_ID`),
  UNIQUE KEY `Password_UNIQUE` (`Password`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (101,'SInaya','55501','Admin','Inaya','Sharma','Female','1991-03-02','A+','inayasharma@gmail.com','Junnar'),(102,'ANaya','55502','Staff','Naya','Acharya','Female','1991-04-04','B+','nayaacharya@gmail.com','Haveli'),(103,'AIshaan','55503','staff','Ishaan','Agarwal','Male','1992-05-05','O+','ishaanagarwal@gmail.com','Haveli'),(104,'KDhruv','55504','staff','Dhruv','Khatri','Male','1993-06-06','AB+','dhruvkhatri@gmail.com','Maval'),(105,'AAmar','55505','staff','Amar','Ahuja','Male','1993-07-07','AB-','amarahuja@gmail.com','Mulshi'),(106,'ADiya','55506','Donor','Diya','Anand','Female','1992-08-08','A+','diyaanand@gmail.com','Haveli'),(107,'PAnanya','55507','Donor','Ananya','Patel','Female','1994-09-09','A-','ananyapatel@gmail.com','Haveli'),(108,'RAgastya','55508','Donor','Agastya','Reddy','Male','1994-10-10','B+','agastyareddy@gmail.com','Bhopodi'),(109,'BJaya','55509','Donor','Jaya','Bakshi','Female','1995-11-11','B-','jayabakshi@gmail.com','Chakan'),(110,'ASana','55510','Donor','Sana','Anthony','Female','1995-12-12','O+','sanaanthony@gmail.com','ShivajiNagar'),(111,'BAditi','55511','Donor','Aditi','Banerjee','Female','1996-03-13','O-','aditibanerjee@gmail.com','Kasbapeth'),(112,'BAjay','55512','Donor','Ajay','Bhatt','Male','1997-04-14','AB+','ajaybhatt@gmail.com','Bhawanipeth'),(113,'BAnjali','55513','Donor','Anjali','Basu','Female','1997-06-16','AB-','anjalibasu@gmail.com','Bhawanipeth'),(114,'VNikhil','55514','Donor','Nikhil','Varma','Male','1998-06-16','A+','nikhilvarma@gmail.com','Chakan'),(115,'DShaan','55515','Donor','Shaan','Dalal','Male','1998-07-17','B+','shaandalal@gmail.com','Chakan'),(116,'CSahil','55516','Patient','Sahil','Chowdhary','Male','1993-08-18','A-','sahilchowdhary@gmail.com','ShivajiNagar'),(117,'CIshani','55517','Patient','Ishaani','Chabra','Female','1992-09-19','O+','ishaanichabra@gmail.com','Chakan'),(118,'CAmbar','55518','Patient','Ambar','Chadha','Male','1991-02-20','AB+','ambarchadha@gmail.com','Bhawanipeth'),(119,'CDarsh','55519','Patient','Darsh','Chawla','Male','1995-03-21','B+','darshchawla@gmail.com','Kasbapeth'),(120,'AAshwin','55520','Patient','Ashwin','Apte','Male','1998-03-22','A+','ashwinapte@gmail.com','ShivajiNagar');
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

-- Dump completed on 2022-03-26 15:34:09
