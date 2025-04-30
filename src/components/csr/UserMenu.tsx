import { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Avatar = styled.img<{ $isOpen?: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  cursor: pointer;
  object-fit: cover;
  transition: box-shadow 0.3s ease;

  ${({ theme, $isOpen }) =>
    $isOpen
      ? theme.effects.glowSecondary
        ? `box-shadow: ${theme.effects.glowSecondary};`
        : ""
      : `box-shadow: ${theme.effects.glowPrimary};`}

  &:hover {
    box-shadow: ${({ theme }) => theme.effects.glowSecondary};
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 1rem;
  background-color: ${({ theme }) => theme.backgroundColors.card};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.effects.glowPrimary};
  padding: 1rem;
  z-index: 100;
  min-width: 220px;
  animation: ${fadeIn} 0.3s ease;
`;

const Email = styled.p`
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 0.75rem;
  word-break: break-all;
`;

const MenuItem = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.colors.light};
  padding: 0.5rem 0;
  font-size: 0.95rem;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const LogoutButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  width: 100%;
  cursor: pointer;
  margin-top: 0.75rem;
  box-shadow: ${({ theme }) => theme.effects.glowPrimary};

  &:hover {
    box-shadow: ${({ theme }) => theme.effects.glowHover};
  }
`;

export const UserMenu = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  if (!session) return null;

  return (
    <div ref={menuRef} style={{ position: "relative", zIndex: 1000 }}>
      <Avatar
        $isOpen={isOpen}
        src={session.user?.image ?? "Todo use Default image"}
        alt="User avatar"
        onClick={toggleMenu}
        referrerPolicy="no-referrer"
      />
      {isOpen && (
        <Dropdown>
          <Email>{session.user?.email}</Email>
          <MenuItem href="/account">Mon compte</MenuItem>
          <MenuItem href="/tasks">Mes tâches</MenuItem>
          <LogoutButton onClick={() => signOut()}>Se déconnecter</LogoutButton>
        </Dropdown>
      )}
    </div>
  );
};
