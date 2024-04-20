USE [dnomaiDatabase]
GO
/****** Object:  Table [dbo].[heaterTable]    Script Date: 04/03/2024 19:31:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[heaterTable](
	[ID] [int] NULL,
	[Name] [varchar](50) NULL,
	[Temperature] [real] NULL,
	[Time] [datetime] NULL
) ON [PRIMARY]
GO
INSERT [dbo].[heaterTable] ([ID], [Name], [Temperature], [Time]) VALUES (1, N'Heater_1', 10, CAST(N'2024-03-04T18:20:59.473' AS DateTime))
GO
INSERT [dbo].[heaterTable] ([ID], [Name], [Temperature], [Time]) VALUES (1, N'Heater_1', 11, CAST(N'2024-03-04T18:21:03.427' AS DateTime))
GO
INSERT [dbo].[heaterTable] ([ID], [Name], [Temperature], [Time]) VALUES (2, N'Heater_2', 3, CAST(N'2024-03-04T18:21:07.443' AS DateTime))
GO
INSERT [dbo].[heaterTable] ([ID], [Name], [Temperature], [Time]) VALUES (1, N'Heater_1', 12, CAST(N'2024-03-04T18:21:11.427' AS DateTime))
GO
INSERT [dbo].[heaterTable] ([ID], [Name], [Temperature], [Time]) VALUES (3, N'Heater_3', 24, CAST(N'2024-03-04T18:21:15.420' AS DateTime))
GO