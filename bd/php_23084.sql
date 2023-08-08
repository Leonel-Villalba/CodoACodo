-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-07-2023 a las 00:23:03
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `php_23084`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `first_table`
--

CREATE TABLE `first_table` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(40) DEFAULT NULL,
  `Apellido` varchar(40) DEFAULT NULL,
  `Edad` int(3) DEFAULT NULL,
  `Fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Provincia` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `first_table`
--

INSERT INTO `first_table` (`Id`, `Nombre`, `Apellido`, `Edad`, `Fecha`, `Provincia`) VALUES
(1, 'Lautaro', 'Gonzalez', 32, '1991-05-21 03:00:00', 'Corrientes'),
(2, 'Santiago', 'Benavidez', 22, '2001-09-24 03:00:00', 'Misiones'),
(3, 'Leonel', 'Silva', 54, '0000-00-00 00:00:00', 'Buenos Aires'),
(4, 'Victoria', 'Montiel', 89, '0000-00-00 00:00:00', 'Cordoba'),
(5, 'Romina', 'Vieira', 26, '1997-06-26 03:00:00', 'Buenos Aires');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idusuario` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `clave` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusuario`, `usuario`, `clave`) VALUES
(1, 'prueba@gmail.com', 'Numero123'),
(5, 'leo.villalbaa13@gmail', 'Leonel123'),
(6, 'pepe.elgrillito@gmail.com', 'Pinocho1234'),
(7, 'Leonel@gmail.com', 'Feliperover'),
(8, 'peterelmasca@gmail.com', 'Peter123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `first_table`
--
ALTER TABLE `first_table`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `first_table`
--
ALTER TABLE `first_table`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
