# Core Architectural Services

A region is a collections of data centers.

Azure has more regions than other providers.

Provide flexibility and scale.

Preserve data residency.

Regions offer compliance and resiliency.

Some services aren't tied down to a specific regions.

Some services are only available in certain regions.

## Region Pairs

Region Pairs provides:

-   Physical Isolation
    Azure prefers at least 300 miles of separation between data centers in a regional pair.

-   Platform-Provided Replication
    Some services provide automatic replication to the paired region.

-   Priority Recovery
    In an outage, recovery of one region is prioritized out every pair.

-   Sequential Updates
    Azure System updates are rolled out paired regions sequentially (not at the same time)

-   Data Residency
    Paired regions are members of the same geography - except Brazil.

## Geographies

Discrete markets that preserve data residency and compliance boundaries.

Typically contain two or more regions.

Allow customers with specific data=residency and compliance needs to keep their data and applications in close proximity.

Categorized as 5 options. Americas, Europe, Asia Pacific, Middles East and Africa.

## Availability Options

Single VM

-   Availability Sets

### Update Domains

Logical Section.

### Fault Domains

Hardware Section.

-   Availability Zones

Physically separate locations within an Azure region

Takes Availability sets to the next level

Includes one or more data centers. equipped with independent power, cooling and networking

Acts as an isolation boundary

If one availability zone goes down, the other continues working

At least 3 availability zones in an enabled region

## Resource Group

Containers for multiple resources that share the same life cycle.

Aggregates resources into a single manageable unit.

Every Azure resource must exist in one and only one resource group.

How to divide resources into groups is decided by your organization.

## Azure Resource Manager

Provide a management layer that enables you to create, update, and delete resources in your Azure subscription.

Create, configure, manage and delete resources and resource groups.

Automate using tools and SDKs.(Azure Powershell etc.)

Resource Manager templates are JSON files that define the resources you wish to deploy.

# Azure Compute

Provide computing resources such as disks, CPUs, memory, networking, and OS.

Pay-as-you-go

A wide range of computing solutions

## Azure VMs

Virtualized Version of Physical Server

Runs an OS that Allows You to Install and Run Software

Retain Total Control Over the OS

Run Custom Software

## VM Scale Set

A set of identically-configured virtual machines

Supports true auto-scale

Scale manually, automatically, or a combination of the two

## App Service

PaaS offering build, deploy and scale enterprise-grade apps.

A fully managed platform.

No infrastructure maintenance.

## Azure Functions

A code-only solution

Often used when you need to perform some task in response to a event.

# Container Services

Containers are a virtualization environment. However, unlike virtual machines, you do not manage an operating system. Containers are meant to be lightweight, and are designed to be created, scaled out, and stopped dynamically.

## Azure Container Instances

A PaaS offering that allows you to upload your containers, which it then will run.

## Azure Kubernetes Service

A container orchestrator service for managing large numbers of containers.

# Network Service

## Azure Virtual Network

Allow several types of Azure resources to securely communicate.

Scoped to a single region

Connect multiple virtual networks from different regions, using virtual network peering.

Provide isolation, segmentation, and communication with on-prem & cloud resources.

## Azure load balancer

Scale applications and create high availability

Supports inbound and outbound scenarios

Load balance incoming internet traffic and internal traffic across Azure services

Port forward specific traffic

## Azure VPN Gateway

A virtual network gateway

Sends encrypted traffic over the public internet between and Azure virtual Network and an on-prem network.

Provides a secure connection from an on-prem environment to Azure.

## Azure Application Gateway

A web traffic load balancer

Route traffic based on source IP address & port to a destination IP address & port

Includes a web application firewall

Redirection and session affinity features

## Azure CDN

Distributed network of servers

Used to more-efficiently serve web content to users

Content cached on physical, strategically-placed nodes.

# Azure Data Categories

## Structured

Storable in relational database tables
Sensor data and financial data

## Semi-Structured

Non-relational or NoSQL data
Books, blogs, JSON, HTML documents

## Unstructured

Non-relational or blob
PDF, JPG, videos

# Azure Storage Services

## Disks

-   Disks that VMs, apps, & services can access
-   Persistently store data and access it from an attached virtual hard disk
-   Two flavors managed and unmanaged
-   Helpful in Lift and shift operations
-   Available in several different sizes and performance levels

## Files

-   Setup highly available network files shares
-   Access from anywhere with SMB protocol
-   Secure access
-   Migrate on-prem apps to Azure

## Containers

-   Object storage solution
-   Optimized for storing lots of unstructured data
-   You need to serve images or documents directly to a web browser
-   Blob storage is (are) optimized for storing massive amounts of unstructured data in Azure.

## Queues

-   Store and retrieve messages
-   Highly scalable
-   Messages can be processed asynchronously

## Tables

-   NoSQL data store
-   Designed for large amounts of structured data

# Azure Database Services

## Azure CosmoDB

a globally-distributed database service that enables you to elastically and independently scale throughput and storage

## Azure SqlDB

a relational database as a service based on the latest stable version of the Miscrosoft SQL Server database engine

## Azure Database Migration

a fully-managed service designed to enable seamless migrations from multiple database sources to Azure data platforms with minimal downtime.

# Azure management tools

## Azure Portal

The most common way to deploy and manage Azure resources.

Get links for help on different topics.

Does not offer a way to automate repetitive tasks

## Azure Powershell

Most used command-line tool

Connect to Azure subscription

Needs Windows PowerShell to run

"New-AzVm"

## Azure CLI

A cross-platform command-line program that you can use to connect Azure and to execute administrative commands against Azure resources.

## Azure Cloud Shell

Browser-based scripting environment

Allows you to choose the shell experience that suits you best

## Azure Mobile App

Access, manage, and monitor your Azure accounts and resources from an iOS and Android phone or tablet

Get notifications and alerts about important health issues and diagnose and fix many issues.

Start, stop, and restart VMs and web apps.

Connect to your virtual machines and to manage permissions with role-based access control.

## Azure REST APIs

Service endpoints that support sets of HTTP operations, or methods.

Provide create, retrieve, update, and delete access to the service's resources.

Come into play when developers are developing solutions that need to talk to Azure.

## Azure advisor

Free service built into Azure portal.

Azure Advisor is the tool to use when you want to get recommendations on improving your Azure
environment and for when you want to find ways to save on costs.

# Azure Market Place

Connect end users with Microsoft partners, Independent Software Vendors (ISVs), and start-ups that offer solutions and service for Azure.

Azure customers, IT professionals and cloud developers can find, try, purchase, and provision Azure applications and services from certified service providers.
