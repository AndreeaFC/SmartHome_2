
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 12/13/2016 15:45:51
-- Generated from EDMX file: c:\users\andreeaflorina\documents\visual studio 2015\Projects\SmartHomeProject\DataLibrary\SmartHomeDataModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [SmartHomeDB];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------


-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'HouseAreas'
CREATE TABLE [dbo].[HouseAreas] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [AreaName] nvarchar(max)  NOT NULL,
    [LightsOn] bit  NOT NULL,
    [AreaHeating] float  NOT NULL,
    [FloorHeating] bit  NOT NULL,
    [Alarm] bit  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'HouseAreas'
ALTER TABLE [dbo].[HouseAreas]
ADD CONSTRAINT [PK_HouseAreas]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------