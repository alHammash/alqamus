SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";



CREATE DATABASE IF NOT EXISTS `alqamus` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `alqamus`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
`ID` int(11) unsigned NOT NULL,
  `fullName` varchar(200) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `authToken` varchar(250) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

INSERT INTO `user` (`ID`, `fullName`, `email`, `password`, `authToken`) VALUES
(5, 'name2', 'pass', 'email2', 'auth'),
(6, 'testname', 'mah@mah.com', '123456', NULL);


ALTER TABLE `user`
 ADD PRIMARY KEY (`ID`);


ALTER TABLE `user`
MODIFY `ID` int(11) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
