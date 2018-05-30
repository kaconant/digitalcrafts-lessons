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
-- Name: album; Type: TABLE; Schema: public; Owner: kconant
--

CREATE TABLE public.album (
    id integer NOT NULL,
    artistid integer,
    name character varying(50),
    releasedate date,
    sales integer,
    label character varying(50)
);


ALTER TABLE public.album OWNER TO kconant;

--
-- Name: album_id_seq; Type: SEQUENCE; Schema: public; Owner: kconant
--

CREATE SEQUENCE public.album_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.album_id_seq OWNER TO kconant;

--
-- Name: album_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kconant
--

ALTER SEQUENCE public.album_id_seq OWNED BY public.album.id;


--
-- Name: artist; Type: TABLE; Schema: public; Owner: kconant
--

CREATE TABLE public.artist (
    id integer NOT NULL,
    name character varying(50),
    genre character varying(50),
    age integer
);


ALTER TABLE public.artist OWNER TO kconant;

--
-- Name: artist_id_seq; Type: SEQUENCE; Schema: public; Owner: kconant
--

CREATE SEQUENCE public.artist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.artist_id_seq OWNER TO kconant;

--
-- Name: artist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kconant
--

ALTER SEQUENCE public.artist_id_seq OWNED BY public.artist.id;


--
-- Name: songs; Type: TABLE; Schema: public; Owner: kconant
--

CREATE TABLE public.songs (
    id integer NOT NULL,
    writerid integer,
    date date,
    name character varying(50)
);


ALTER TABLE public.songs OWNER TO kconant;

--
-- Name: songs_id_seq; Type: SEQUENCE; Schema: public; Owner: kconant
--

CREATE SEQUENCE public.songs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.songs_id_seq OWNER TO kconant;

--
-- Name: songs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kconant
--

ALTER SEQUENCE public.songs_id_seq OWNED BY public.songs.id;


--
-- Name: songwriter; Type: TABLE; Schema: public; Owner: kconant
--

CREATE TABLE public.songwriter (
    id integer NOT NULL,
    name character varying(50)
);


ALTER TABLE public.songwriter OWNER TO kconant;

--
-- Name: songwriter_id_seq; Type: SEQUENCE; Schema: public; Owner: kconant
--

CREATE SEQUENCE public.songwriter_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.songwriter_id_seq OWNER TO kconant;

--
-- Name: songwriter_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kconant
--

ALTER SEQUENCE public.songwriter_id_seq OWNED BY public.songwriter.id;


--
-- Name: tracks; Type: TABLE; Schema: public; Owner: kconant
--

CREATE TABLE public.tracks (
    id integer NOT NULL,
    albumid integer,
    songid integer,
    name character varying(50),
    tracknumber integer,
    duration numeric
);


ALTER TABLE public.tracks OWNER TO kconant;

--
-- Name: tracks_id_seq; Type: SEQUENCE; Schema: public; Owner: kconant
--

CREATE SEQUENCE public.tracks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tracks_id_seq OWNER TO kconant;

--
-- Name: tracks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kconant
--

ALTER SEQUENCE public.tracks_id_seq OWNED BY public.tracks.id;


--
-- Name: album id; Type: DEFAULT; Schema: public; Owner: kconant
--

ALTER TABLE ONLY public.album ALTER COLUMN id SET DEFAULT nextval('public.album_id_seq'::regclass);


--
-- Name: artist id; Type: DEFAULT; Schema: public; Owner: kconant
--

ALTER TABLE ONLY public.artist ALTER COLUMN id SET DEFAULT nextval('public.artist_id_seq'::regclass);


--
-- Name: songs id; Type: DEFAULT; Schema: public; Owner: kconant
--

ALTER TABLE ONLY public.songs ALTER COLUMN id SET DEFAULT nextval('public.songs_id_seq'::regclass);


--
-- Name: songwriter id; Type: DEFAULT; Schema: public; Owner: kconant
--

ALTER TABLE ONLY public.songwriter ALTER COLUMN id SET DEFAULT nextval('public.songwriter_id_seq'::regclass);


--
-- Name: tracks id; Type: DEFAULT; Schema: public; Owner: kconant
--

ALTER TABLE ONLY public.tracks ALTER COLUMN id SET DEFAULT nextval('public.tracks_id_seq'::regclass);


--
-- Data for Name: album; Type: TABLE DATA; Schema: public; Owner: kconant
--

COPY public.album (id, artistid, name, releasedate, sales, label) FROM stdin;
2	1	Visions	2012-01-09	110000	4AD
1	1	Art Angels	2015-11-06	50000	4AD
3	1	Darkbloom	2011-04-18	\N	Arbutus
4	1	Halfaxa	2010-09-30	\N	Arbutus
5	1	Geidi Primes	2010-01-10	\N	Arbutus
\.


--
-- Data for Name: artist; Type: TABLE DATA; Schema: public; Owner: kconant
--

COPY public.artist (id, name, genre, age) FROM stdin;
1	Grimes	Pop Punk	30
\.


--
-- Data for Name: songs; Type: TABLE DATA; Schema: public; Owner: kconant
--

COPY public.songs (id, writerid, date, name) FROM stdin;
25	1	2010-02-01	Outer
26	1	2010-02-01	Intro / Flowers
27	1	2010-02-01	Weregild
28	1	2010-02-01	Rasik
29	1	2010-02-01	Heartbeats
30	1	2010-02-01	Sagrad 
31	1	2010-01-01	Caladan
32	1	2010-01-01	Sardaukar Lev
33	1	2010-01-01	Zoal, Face Dancer
34	1	2010-01-01	Rosa
7	3	2015-01-01	Scream
5	1	2015-01-01	Laughing and Not Being Normal
6	1	2015-01-01	California
8	1	2015-01-01	Flesh Without Blood
9	1	2015-01-01	Belly of the Beat
10	1	2015-01-01	Kill V. Maim
11	1	2015-01-01	Artangels
12	1	2012-01-01	Infinite Without Fulfillment
13	1	2012-01-01	Genesis
14	1	2012-01-01	Oblivion
15	1	2012-01-01	Eight
16	1	2012-01-01	Cicumambient
17	1	2012-01-01	Vowels = Space and Time
18	1	2012-01-01	Visiting Statue
23	2	2011-01-01	Urban Twilight
24	2	2011-01-01	Hedra
19	1	2012-01-01	Be a Body
20	1	2011-01-01	Orphia
21	1	2011-01-01	Vanessa
22	1	2011-01-01	Crystal Ball
\.


--
-- Data for Name: songwriter; Type: TABLE DATA; Schema: public; Owner: kconant
--

COPY public.songwriter (id, name) FROM stdin;
1	Grimes
2	d'Eon
3	Pan Wei-Ju
\.


--
-- Data for Name: tracks; Type: TABLE DATA; Schema: public; Owner: kconant
--

COPY public.tracks (id, albumid, songid, name, tracknumber, duration) FROM stdin;
30	5	34	Rosa	4	3.13
29	5	33	Zoal, Face Dancer	3	2.36
28	5	32	Sardaukar Lev	2	2.06
27	5	31	Caladan	1	2.26
1	1	5	Laughing and Not Being Normal	1	1.47
3	1	7	Scream	3	2.20
5	1	9	Belly of the Beat	5	3.25
2	1	6	California	2	3.18
4	1	8	Flesh Without Blood	4	4.24
22	4	26	Intro / Flowers	2	2.5
21	4	25	Outer	1	1.12
20	3	24	Hedra	5	3.39
19	3	23	Urban Twilight	4	4.16
18	3	22	Crystal Ball	3	3.16
17	3	21	Vanessa	2	5.24
16	3	20	Orphia	1	1.09
23	4	27	Weregild	3	5.14
15	2	19	Be a Body	8	4.20
14	2	18	Visiting Statue	7	1.59
13	2	17	Vowels = Space and Time	6	4.21
12	2	16	Cicumambient	5	3.48
11	2	15	Eight	4	1.48
10	2	14	Oblivion	3	4.12
9	2	13	Genesis	2	4.12
8	2	12	Infinite Without Fulfillment	1	1.36
7	1	11	Artangels	7	4.07
6	1	10	Kill V. Maim	6	4.06
24	4	28	Rasik	4	1.5
25	4	29	Heartbeats	5	4.32
26	4	30	Sagrad 	6	5.13
\.


--
-- Name: album_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kconant
--

SELECT pg_catalog.setval('public.album_id_seq', 5, true);


--
-- Name: artist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kconant
--

SELECT pg_catalog.setval('public.artist_id_seq', 1, true);


--
-- Name: songs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kconant
--

SELECT pg_catalog.setval('public.songs_id_seq', 34, true);


--
-- Name: songwriter_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kconant
--

SELECT pg_catalog.setval('public.songwriter_id_seq', 4, true);


--
-- Name: tracks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kconant
--

SELECT pg_catalog.setval('public.tracks_id_seq', 30, true);


--
-- Name: album album_pkey; Type: CONSTRAINT; Schema: public; Owner: kconant
--

ALTER TABLE ONLY public.album
    ADD CONSTRAINT album_pkey PRIMARY KEY (id);


--
-- Name: artist artist_pkey; Type: CONSTRAINT; Schema: public; Owner: kconant
--

ALTER TABLE ONLY public.artist
    ADD CONSTRAINT artist_pkey PRIMARY KEY (id);


--
-- Name: songs songs_pkey; Type: CONSTRAINT; Schema: public; Owner: kconant
--

ALTER TABLE ONLY public.songs
    ADD CONSTRAINT songs_pkey PRIMARY KEY (id);


--
-- Name: songwriter songwriter_pkey; Type: CONSTRAINT; Schema: public; Owner: kconant
--

ALTER TABLE ONLY public.songwriter
    ADD CONSTRAINT songwriter_pkey PRIMARY KEY (id);


--
-- Name: tracks tracks_pkey; Type: CONSTRAINT; Schema: public; Owner: kconant
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

