--
-- PostgreSQL database dump
--

-- Dumped from database version 10.4
-- Dumped by pg_dump version 10.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: members; Type: TABLE; Schema: public; Owner: kconant
--

CREATE TABLE public.members (
    userid integer NOT NULL,
    lastname character varying(200) NOT NULL,
    firstname character varying(200) NOT NULL,
    address character varying(300) NOT NULL,
    zipcode integer NOT NULL,
    telephone character varying(20) NOT NULL
);


ALTER TABLE public.members OWNER TO kconant;

--
-- Data for Name: members; Type: TABLE DATA; Schema: public; Owner: kconant
--

COPY public.members (userid, lastname, firstname, address, zipcode, telephone) FROM stdin;
1	aquino	oakley	510 Oakley Street	30032	404-222-4321
2	krissy	conant	1971 Wingatey Road	30341	404-222-3331
\.


--
-- Name: members members_userid_key; Type: CONSTRAINT; Schema: public; Owner: kconant
--

ALTER TABLE ONLY public.members
    ADD CONSTRAINT members_userid_key UNIQUE (userid);


--
-- PostgreSQL database dump complete
--

