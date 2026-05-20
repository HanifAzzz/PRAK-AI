import { useEffect, useState } from "react";
import { fetchArticle, fetchArticles, fetchBookmarks, fetchNotifications } from "../services/api";

export function useArticles(params = {}) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const paramsKey = JSON.stringify(params);

  useEffect(() => {
    setLoading(true);
    setError("");

    const timer = window.setTimeout(() => {
      setArticles([]);
      setError("Koneksi API terlalu lama merespons.");
      setLoading(false);
    }, 10000);

    const loadArticles = async () => {
      try {
        const data = await fetchArticles(params);
        window.clearTimeout(timer);
        setArticles(data);
        setError("");
      } catch (err) {
        window.clearTimeout(timer);
        setArticles([]);
        setError(err.message || "Gagal memuat berita.");
      } finally {
        setLoading(false);
      }
    };

    loadArticles();

    return () => window.clearTimeout(timer);
  }, [paramsKey]);

  return { articles, loading, error };
}

export function useArticle(id) {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    let alive = true;

    setLoading(true);
    fetchArticle(id)
      .then((data) => {
        if (alive) {
          setArticle(data);
          setError("");
        }
      })
      .catch((err) => {
        if (alive) {
          setArticle(null);
          setError(err.message || "Artikel tidak ditemukan.");
        }
      })
      .finally(() => {
        if (alive) setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, [id]);

  return { article, loading, error };
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    fetchBookmarks()
      .then((data) => {
        if (alive) setBookmarks(data);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, []);

  return { bookmarks, setBookmarks, loading };
}

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    fetchNotifications()
      .then((data) => {
        if (alive) setNotifications(data);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, []);

  return { notifications, loading };
}
