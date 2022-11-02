import React from 'react';
import { Box, Divider, Text } from '@chakra-ui/react';

export function AppFooter() {
  return (
    <Box
      as="footer"
      h="50px"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Divider />
      <Box as="footer" p={4}>
        <Text as="p">
          &copy; {new Date().getFullYear()} &middot; CN Group CZ a.s.
        </Text>
      </Box>
    </Box>
  );
}
